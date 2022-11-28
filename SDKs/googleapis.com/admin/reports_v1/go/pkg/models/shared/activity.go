package shared

import (
	"time"
)

// ActivityActor
// User doing the action.
type ActivityActor struct {
	CallerType *string `json:"callerType,omitempty"`
	Email      *string `json:"email,omitempty"`
	Key        *string `json:"key,omitempty"`
	ProfileID  *string `json:"profileId,omitempty"`
}

// ActivityEventsParametersMessageValue
// Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
type ActivityEventsParametersMessageValue struct {
	Parameter []NestedParameter `json:"parameter,omitempty"`
}

type ActivityEventsParametersMultiMessageValue struct {
	Parameter []NestedParameter `json:"parameter,omitempty"`
}

type ActivityEventsParameters struct {
	BoolValue         *bool                                       `json:"boolValue,omitempty"`
	IntValue          *string                                     `json:"intValue,omitempty"`
	MessageValue      *ActivityEventsParametersMessageValue       `json:"messageValue,omitempty"`
	MultiIntValue     []string                                    `json:"multiIntValue,omitempty"`
	MultiMessageValue []ActivityEventsParametersMultiMessageValue `json:"multiMessageValue,omitempty"`
	MultiValue        []string                                    `json:"multiValue,omitempty"`
	Name              *string                                     `json:"name,omitempty"`
	Value             *string                                     `json:"value,omitempty"`
}

type ActivityEvents struct {
	Name       *string                    `json:"name,omitempty"`
	Parameters []ActivityEventsParameters `json:"parameters,omitempty"`
	Type       *string                    `json:"type,omitempty"`
}

// ActivityID
// Unique identifier for each activity record.
type ActivityID struct {
	ApplicationName *string    `json:"applicationName,omitempty"`
	CustomerID      *string    `json:"customerId,omitempty"`
	Time            *time.Time `json:"time,omitempty"`
	UniqueQualifier *string    `json:"uniqueQualifier,omitempty"`
}

// Activity
// JSON template for the activity resource.
type Activity struct {
	Actor       *ActivityActor   `json:"actor,omitempty"`
	Etag        *string          `json:"etag,omitempty"`
	Events      []ActivityEvents `json:"events,omitempty"`
	ID          *ActivityID      `json:"id,omitempty"`
	IPAddress   *string          `json:"ipAddress,omitempty"`
	Kind        *string          `json:"kind,omitempty"`
	OwnerDomain *string          `json:"ownerDomain,omitempty"`
}

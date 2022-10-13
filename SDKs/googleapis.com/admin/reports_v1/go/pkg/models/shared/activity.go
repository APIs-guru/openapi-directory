package shared

import (
	"time"
)

type ActivityActor struct {
	CallerType *string `json:"callerType"`
	Email      *string `json:"email"`
	Key        *string `json:"key"`
	ProfileID  *string `json:"profileId"`
}

type ActivityEventsParametersMessageValue struct {
	Parameter []NestedParameter `json:"parameter"`
}

type ActivityEventsParametersMultiMessageValue struct {
	Parameter []NestedParameter `json:"parameter"`
}

type ActivityEventsParameters struct {
	BoolValue         *bool                                       `json:"boolValue"`
	IntValue          *string                                     `json:"intValue"`
	MessageValue      *ActivityEventsParametersMessageValue       `json:"messageValue"`
	MultiIntValue     []string                                    `json:"multiIntValue"`
	MultiMessageValue []ActivityEventsParametersMultiMessageValue `json:"multiMessageValue"`
	MultiValue        []string                                    `json:"multiValue"`
	Name              *string                                     `json:"name"`
	Value             *string                                     `json:"value"`
}

type ActivityEvents struct {
	Name       *string                    `json:"name"`
	Parameters []ActivityEventsParameters `json:"parameters"`
	Type       *string                    `json:"type"`
}

type ActivityID struct {
	ApplicationName *string    `json:"applicationName"`
	CustomerID      *string    `json:"customerId"`
	Time            *time.Time `json:"time"`
	UniqueQualifier *string    `json:"uniqueQualifier"`
}

type Activity struct {
	Actor       *ActivityActor   `json:"actor"`
	Etag        *string          `json:"etag"`
	Events      []ActivityEvents `json:"events"`
	ID          *ActivityID      `json:"id"`
	IPAddress   *string          `json:"ipAddress"`
	Kind        *string          `json:"kind"`
	OwnerDomain *string          `json:"ownerDomain"`
}

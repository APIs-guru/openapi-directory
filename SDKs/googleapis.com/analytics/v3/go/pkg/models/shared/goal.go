package shared

import (
	"time"
)

type GoalEventDetailsEventConditions struct {
	ComparisonType  *string `json:"comparisonType,omitempty"`
	ComparisonValue *string `json:"comparisonValue,omitempty"`
	Expression      *string `json:"expression,omitempty"`
	MatchType       *string `json:"matchType,omitempty"`
	Type            *string `json:"type,omitempty"`
}

type GoalEventDetails struct {
	EventConditions []GoalEventDetailsEventConditions `json:"eventConditions,omitempty"`
	UseEventValue   *bool                             `json:"useEventValue,omitempty"`
}

type GoalParentLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

type GoalURLDestinationDetailsSteps struct {
	Name   *string `json:"name,omitempty"`
	Number *int32  `json:"number,omitempty"`
	URL    *string `json:"url,omitempty"`
}

type GoalURLDestinationDetails struct {
	CaseSensitive     *bool                            `json:"caseSensitive,omitempty"`
	FirstStepRequired *bool                            `json:"firstStepRequired,omitempty"`
	MatchType         *string                          `json:"matchType,omitempty"`
	Steps             []GoalURLDestinationDetailsSteps `json:"steps,omitempty"`
	URL               *string                          `json:"url,omitempty"`
}

type GoalVisitNumPagesDetails struct {
	ComparisonType  *string `json:"comparisonType,omitempty"`
	ComparisonValue *string `json:"comparisonValue,omitempty"`
}

type GoalVisitTimeOnSiteDetails struct {
	ComparisonType  *string `json:"comparisonType,omitempty"`
	ComparisonValue *string `json:"comparisonValue,omitempty"`
}

type Goal struct {
	AccountID              *string                     `json:"accountId,omitempty"`
	Active                 *bool                       `json:"active,omitempty"`
	Created                *time.Time                  `json:"created,omitempty"`
	EventDetails           *GoalEventDetails           `json:"eventDetails,omitempty"`
	ID                     *string                     `json:"id,omitempty"`
	InternalWebPropertyID  *string                     `json:"internalWebPropertyId,omitempty"`
	Kind                   *string                     `json:"kind,omitempty"`
	Name                   *string                     `json:"name,omitempty"`
	ParentLink             *GoalParentLink             `json:"parentLink,omitempty"`
	ProfileID              *string                     `json:"profileId,omitempty"`
	SelfLink               *string                     `json:"selfLink,omitempty"`
	Type                   *string                     `json:"type,omitempty"`
	Updated                *time.Time                  `json:"updated,omitempty"`
	URLDestinationDetails  *GoalURLDestinationDetails  `json:"urlDestinationDetails,omitempty"`
	Value                  *float32                    `json:"value,omitempty"`
	VisitNumPagesDetails   *GoalVisitNumPagesDetails   `json:"visitNumPagesDetails,omitempty"`
	VisitTimeOnSiteDetails *GoalVisitTimeOnSiteDetails `json:"visitTimeOnSiteDetails,omitempty"`
	WebPropertyID          *string                     `json:"webPropertyId,omitempty"`
}

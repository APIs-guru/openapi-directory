package shared

import (
	"time"
)

type GoalEventDetailsEventConditions struct {
	ComparisonType  *string `json:"comparisonType"`
	ComparisonValue *string `json:"comparisonValue"`
	Expression      *string `json:"expression"`
	MatchType       *string `json:"matchType"`
	Type            *string `json:"type"`
}

type GoalEventDetails struct {
	EventConditions []GoalEventDetailsEventConditions `json:"eventConditions"`
	UseEventValue   *bool                             `json:"useEventValue"`
}

type GoalParentLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type GoalURLDestinationDetailsSteps struct {
	Name   *string `json:"name"`
	Number *int32  `json:"number"`
	URL    *string `json:"url"`
}

type GoalURLDestinationDetails struct {
	CaseSensitive     *bool                            `json:"caseSensitive"`
	FirstStepRequired *bool                            `json:"firstStepRequired"`
	MatchType         *string                          `json:"matchType"`
	Steps             []GoalURLDestinationDetailsSteps `json:"steps"`
	URL               *string                          `json:"url"`
}

type GoalVisitNumPagesDetails struct {
	ComparisonType  *string `json:"comparisonType"`
	ComparisonValue *string `json:"comparisonValue"`
}

type GoalVisitTimeOnSiteDetails struct {
	ComparisonType  *string `json:"comparisonType"`
	ComparisonValue *string `json:"comparisonValue"`
}

type Goal struct {
	AccountID              *string                     `json:"accountId"`
	Active                 *bool                       `json:"active"`
	Created                *time.Time                  `json:"created"`
	EventDetails           *GoalEventDetails           `json:"eventDetails"`
	ID                     *string                     `json:"id"`
	InternalWebPropertyID  *string                     `json:"internalWebPropertyId"`
	Kind                   *string                     `json:"kind"`
	Name                   *string                     `json:"name"`
	ParentLink             *GoalParentLink             `json:"parentLink"`
	ProfileID              *string                     `json:"profileId"`
	SelfLink               *string                     `json:"selfLink"`
	Type                   *string                     `json:"type"`
	Updated                *time.Time                  `json:"updated"`
	URLDestinationDetails  *GoalURLDestinationDetails  `json:"urlDestinationDetails"`
	Value                  *float32                    `json:"value"`
	VisitNumPagesDetails   *GoalVisitNumPagesDetails   `json:"visitNumPagesDetails"`
	VisitTimeOnSiteDetails *GoalVisitTimeOnSiteDetails `json:"visitTimeOnSiteDetails"`
	WebPropertyID          *string                     `json:"webPropertyId"`
}

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

// GoalEventDetails
// Details for the goal of the type EVENT.
type GoalEventDetails struct {
	EventConditions []GoalEventDetailsEventConditions `json:"eventConditions,omitempty"`
	UseEventValue   *bool                             `json:"useEventValue,omitempty"`
}

// GoalParentLink
// Parent link for a goal. Points to the view (profile) to which this goal belongs.
type GoalParentLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

type GoalURLDestinationDetailsSteps struct {
	Name   *string `json:"name,omitempty"`
	Number *int32  `json:"number,omitempty"`
	URL    *string `json:"url,omitempty"`
}

// GoalURLDestinationDetails
// Details for the goal of the type URL_DESTINATION.
type GoalURLDestinationDetails struct {
	CaseSensitive     *bool                            `json:"caseSensitive,omitempty"`
	FirstStepRequired *bool                            `json:"firstStepRequired,omitempty"`
	MatchType         *string                          `json:"matchType,omitempty"`
	Steps             []GoalURLDestinationDetailsSteps `json:"steps,omitempty"`
	URL               *string                          `json:"url,omitempty"`
}

// GoalVisitNumPagesDetails
// Details for the goal of the type VISIT_NUM_PAGES.
type GoalVisitNumPagesDetails struct {
	ComparisonType  *string `json:"comparisonType,omitempty"`
	ComparisonValue *string `json:"comparisonValue,omitempty"`
}

// GoalVisitTimeOnSiteDetails
// Details for the goal of the type VISIT_TIME_ON_SITE.
type GoalVisitTimeOnSiteDetails struct {
	ComparisonType  *string `json:"comparisonType,omitempty"`
	ComparisonValue *string `json:"comparisonValue,omitempty"`
}

// Goal
// JSON template for Analytics goal resource.
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

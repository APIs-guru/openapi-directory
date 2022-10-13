package shared

import (
	"time"
)

type RemarketingAudienceAudienceDefinition struct {
	IncludeConditions *IncludeConditions `json:"includeConditions"`
}

type RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions struct {
	ExclusionDuration *string `json:"exclusionDuration"`
	Segment           *string `json:"segment"`
}

type RemarketingAudienceStateBasedAudienceDefinition struct {
	ExcludeConditions *RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions `json:"excludeConditions"`
	IncludeConditions *IncludeConditions                                                `json:"includeConditions"`
}

type RemarketingAudience struct {
	AccountID                    *string                                          `json:"accountId"`
	AudienceDefinition           *RemarketingAudienceAudienceDefinition           `json:"audienceDefinition"`
	AudienceType                 *string                                          `json:"audienceType"`
	Created                      *time.Time                                       `json:"created"`
	Description                  *string                                          `json:"description"`
	ID                           *string                                          `json:"id"`
	InternalWebPropertyID        *string                                          `json:"internalWebPropertyId"`
	Kind                         *string                                          `json:"kind"`
	LinkedAdAccounts             []LinkedForeignAccount                           `json:"linkedAdAccounts"`
	LinkedViews                  []string                                         `json:"linkedViews"`
	Name                         *string                                          `json:"name"`
	StateBasedAudienceDefinition *RemarketingAudienceStateBasedAudienceDefinition `json:"stateBasedAudienceDefinition"`
	Updated                      *time.Time                                       `json:"updated"`
	WebPropertyID                *string                                          `json:"webPropertyId"`
}

package shared

import (
	"time"
)

type RemarketingAudienceAudienceDefinition struct {
	IncludeConditions *IncludeConditions `json:"includeConditions,omitempty"`
}

type RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions struct {
	ExclusionDuration *string `json:"exclusionDuration,omitempty"`
	Segment           *string `json:"segment,omitempty"`
}

type RemarketingAudienceStateBasedAudienceDefinition struct {
	ExcludeConditions *RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions `json:"excludeConditions,omitempty"`
	IncludeConditions *IncludeConditions                                                `json:"includeConditions,omitempty"`
}

type RemarketingAudience struct {
	AccountID                    *string                                          `json:"accountId,omitempty"`
	AudienceDefinition           *RemarketingAudienceAudienceDefinition           `json:"audienceDefinition,omitempty"`
	AudienceType                 *string                                          `json:"audienceType,omitempty"`
	Created                      *time.Time                                       `json:"created,omitempty"`
	Description                  *string                                          `json:"description,omitempty"`
	ID                           *string                                          `json:"id,omitempty"`
	InternalWebPropertyID        *string                                          `json:"internalWebPropertyId,omitempty"`
	Kind                         *string                                          `json:"kind,omitempty"`
	LinkedAdAccounts             []LinkedForeignAccount                           `json:"linkedAdAccounts,omitempty"`
	LinkedViews                  []string                                         `json:"linkedViews,omitempty"`
	Name                         *string                                          `json:"name,omitempty"`
	StateBasedAudienceDefinition *RemarketingAudienceStateBasedAudienceDefinition `json:"stateBasedAudienceDefinition,omitempty"`
	Updated                      *time.Time                                       `json:"updated,omitempty"`
	WebPropertyID                *string                                          `json:"webPropertyId,omitempty"`
}

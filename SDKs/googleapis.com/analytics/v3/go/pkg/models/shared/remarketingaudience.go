package shared

import (
	"time"
)

// RemarketingAudienceAudienceDefinition
// The simple audience definition that will cause a user to be added to an audience.
type RemarketingAudienceAudienceDefinition struct {
	IncludeConditions *IncludeConditions `json:"includeConditions,omitempty"`
}

// RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions
// Defines the conditions to exclude users from the audience.
type RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions struct {
	ExclusionDuration *string `json:"exclusionDuration,omitempty"`
	Segment           *string `json:"segment,omitempty"`
}

// RemarketingAudienceStateBasedAudienceDefinition
// A state based audience definition that will cause a user to be added or removed from an audience.
type RemarketingAudienceStateBasedAudienceDefinition struct {
	ExcludeConditions *RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions `json:"excludeConditions,omitempty"`
	IncludeConditions *IncludeConditions                                                `json:"includeConditions,omitempty"`
}

// RemarketingAudienceInput
// JSON template for an Analytics remarketing audience.
type RemarketingAudienceInput struct {
	AccountID                    *string                                          `json:"accountId,omitempty"`
	AudienceDefinition           *RemarketingAudienceAudienceDefinition           `json:"audienceDefinition,omitempty"`
	AudienceType                 *string                                          `json:"audienceType,omitempty"`
	ID                           *string                                          `json:"id,omitempty"`
	Kind                         *string                                          `json:"kind,omitempty"`
	LinkedAdAccounts             []LinkedForeignAccountInput                      `json:"linkedAdAccounts,omitempty"`
	LinkedViews                  []string                                         `json:"linkedViews,omitempty"`
	Name                         *string                                          `json:"name,omitempty"`
	StateBasedAudienceDefinition *RemarketingAudienceStateBasedAudienceDefinition `json:"stateBasedAudienceDefinition,omitempty"`
	WebPropertyID                *string                                          `json:"webPropertyId,omitempty"`
}

// RemarketingAudience
// JSON template for an Analytics remarketing audience.
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

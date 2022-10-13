package shared

import (
	"time"
)

type ConfigSettingValueModel struct {
	IntegrationLinks        []IntegrationLinkModel       `json:"integrationLinks"`
	LastUpdaterUserEmail    *string                      `json:"lastUpdaterUserEmail"`
	LastUpdaterUserFullName *string                      `json:"lastUpdaterUserFullName"`
	RolloutPercentageItems  []RolloutPercentageItemModel `json:"rolloutPercentageItems"`
	RolloutRules            []RolloutRuleModel           `json:"rolloutRules"`
	Setting                 *SettingDataModel            `json:"setting"`
	SettingTags             []SettingTagModel            `json:"settingTags"`
	UpdatedAt               *time.Time                   `json:"updatedAt"`
	Value                   map[string]interface{}       `json:"value"`
}

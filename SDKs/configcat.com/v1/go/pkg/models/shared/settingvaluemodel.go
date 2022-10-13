package shared

import (
	"time"
)

type SettingValueModel struct {
	Config                  *ConfigModel                 `json:"config"`
	Environment             *EnvironmentModel            `json:"environment"`
	IntegrationLinks        []IntegrationLinkModel       `json:"integrationLinks"`
	LastUpdaterUserEmail    *string                      `json:"lastUpdaterUserEmail"`
	LastUpdaterUserFullName *string                      `json:"lastUpdaterUserFullName"`
	ReadOnly                *bool                        `json:"readOnly"`
	RolloutPercentageItems  []RolloutPercentageItemModel `json:"rolloutPercentageItems"`
	RolloutRules            []RolloutRuleModel           `json:"rolloutRules"`
	Setting                 *SettingDataModel            `json:"setting"`
	SettingTags             []SettingTagModel            `json:"settingTags"`
	UpdatedAt               *time.Time                   `json:"updatedAt"`
	Value                   map[string]interface{}       `json:"value"`
}

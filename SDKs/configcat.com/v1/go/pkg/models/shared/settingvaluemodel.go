package shared

import (
"time")

type SettingValueModel struct {
    Config *ConfigModel `json:"config,omitempty"`
    Environment *EnvironmentModel `json:"environment,omitempty"`
    IntegrationLinks []IntegrationLinkModel `json:"integrationLinks,omitempty"`
    LastUpdaterUserEmail *string `json:"lastUpdaterUserEmail,omitempty"`
    LastUpdaterUserFullName *string `json:"lastUpdaterUserFullName,omitempty"`
    ReadOnly *bool `json:"readOnly,omitempty"`
    RolloutPercentageItems []RolloutPercentageItemModel `json:"rolloutPercentageItems,omitempty"`
    RolloutRules []RolloutRuleModel `json:"rolloutRules,omitempty"`
    Setting *SettingDataModel `json:"setting,omitempty"`
    SettingTags []SettingTagModel `json:"settingTags,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    Value map[string]interface{} `json:"value,omitempty"`
    
}


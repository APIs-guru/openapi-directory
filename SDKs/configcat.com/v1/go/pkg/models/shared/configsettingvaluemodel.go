package shared

import (
"time")

type ConfigSettingValueModel struct {
    IntegrationLinks []IntegrationLinkModel `json:"integrationLinks,omitempty"`
    LastUpdaterUserEmail *string `json:"lastUpdaterUserEmail,omitempty"`
    LastUpdaterUserFullName *string `json:"lastUpdaterUserFullName,omitempty"`
    RolloutPercentageItems []RolloutPercentageItemModel `json:"rolloutPercentageItems,omitempty"`
    RolloutRules []RolloutRuleModel `json:"rolloutRules,omitempty"`
    Setting *SettingDataModel `json:"setting,omitempty"`
    SettingTags []SettingTagModel `json:"settingTags,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    Value map[string]interface{} `json:"value,omitempty"`
    
}


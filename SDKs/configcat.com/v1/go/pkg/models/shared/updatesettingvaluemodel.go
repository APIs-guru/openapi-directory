package shared

type UpdateSettingValueModel struct {
	RolloutPercentageItems []RolloutPercentageItemModel `json:"rolloutPercentageItems,omitempty"`
	RolloutRules           []RolloutRuleModel           `json:"rolloutRules,omitempty"`
	Value                  map[string]interface{}       `json:"value,omitempty"`
}

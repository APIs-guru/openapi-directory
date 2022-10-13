package shared

type UpdateSettingValueModel struct {
	RolloutPercentageItems []RolloutPercentageItemModel `json:"rolloutPercentageItems"`
	RolloutRules           []RolloutRuleModel           `json:"rolloutRules"`
	Value                  map[string]interface{}       `json:"value"`
}

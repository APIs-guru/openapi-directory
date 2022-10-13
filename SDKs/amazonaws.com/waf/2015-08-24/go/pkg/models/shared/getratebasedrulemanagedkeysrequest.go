package shared

type GetRateBasedRuleManagedKeysRequest struct {
	NextMarker *string `json:"NextMarker"`
	RuleID     string  `json:"RuleId"`
}

package shared

// PolicyEnforcementRule
// A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName.
type PolicyEnforcementRule struct {
	BlockAction *BlockAction `json:"blockAction,omitempty"`
	SettingName *string      `json:"settingName,omitempty"`
	WipeAction  *WipeAction  `json:"wipeAction,omitempty"`
}

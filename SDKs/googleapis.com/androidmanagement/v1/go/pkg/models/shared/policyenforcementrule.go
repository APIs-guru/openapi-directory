package shared

type PolicyEnforcementRule struct {
	BlockAction *BlockAction `json:"blockAction,omitempty"`
	SettingName *string      `json:"settingName,omitempty"`
	WipeAction  *WipeAction  `json:"wipeAction,omitempty"`
}

package shared

type PolicyEnforcementRule struct {
	BlockAction *BlockAction `json:"blockAction"`
	SettingName *string      `json:"settingName"`
	WipeAction  *WipeAction  `json:"wipeAction"`
}

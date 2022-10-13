package shared

type WipeAction struct {
	PreserveFrp   *bool  `json:"preserveFrp"`
	WipeAfterDays *int32 `json:"wipeAfterDays"`
}

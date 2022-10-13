package shared

type GetDefaultPatchBaselineResult struct {
	BaselineID      *string              `json:"BaselineId"`
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem"`
}

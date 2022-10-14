package shared

type GetDefaultPatchBaselineResult struct {
	BaselineID      *string              `json:"BaselineId,omitempty"`
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem,omitempty"`
}

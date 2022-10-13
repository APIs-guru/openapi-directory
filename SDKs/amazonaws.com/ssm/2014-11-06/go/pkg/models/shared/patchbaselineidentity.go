package shared

type PatchBaselineIdentity struct {
	BaselineDescription *string              `json:"BaselineDescription"`
	BaselineID          *string              `json:"BaselineId"`
	BaselineName        *string              `json:"BaselineName"`
	DefaultBaseline     *bool                `json:"DefaultBaseline"`
	OperatingSystem     *OperatingSystemEnum `json:"OperatingSystem"`
}

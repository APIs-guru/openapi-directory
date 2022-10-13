package shared

type GetPatchBaselineForPatchGroupResult struct {
	BaselineID      *string              `json:"BaselineId"`
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem"`
	PatchGroup      *string              `json:"PatchGroup"`
}

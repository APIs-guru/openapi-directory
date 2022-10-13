package shared

type GetPatchBaselineForPatchGroupRequest struct {
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem"`
	PatchGroup      string               `json:"PatchGroup"`
}

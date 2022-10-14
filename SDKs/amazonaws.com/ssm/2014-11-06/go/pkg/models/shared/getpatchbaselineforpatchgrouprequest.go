package shared

type GetPatchBaselineForPatchGroupRequest struct {
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem,omitempty"`
	PatchGroup      string               `json:"PatchGroup"`
}

package shared

type DeregisterPatchBaselineForPatchGroupRequest struct {
	BaselineID string `json:"BaselineId"`
	PatchGroup string `json:"PatchGroup"`
}

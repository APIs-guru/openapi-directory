package shared

type PatchGroupPatchBaselineMapping struct {
	BaselineIdentity *PatchBaselineIdentity `json:"BaselineIdentity"`
	PatchGroup       *string                `json:"PatchGroup"`
}

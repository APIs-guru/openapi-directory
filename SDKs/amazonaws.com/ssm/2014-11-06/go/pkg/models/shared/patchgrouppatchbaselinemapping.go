package shared

// PatchGroupPatchBaselineMapping
// The mapping between a patch group and the patch baseline the patch group is registered with.
type PatchGroupPatchBaselineMapping struct {
	BaselineIdentity *PatchBaselineIdentity `json:"BaselineIdentity,omitempty"`
	PatchGroup       *string                `json:"PatchGroup,omitempty"`
}

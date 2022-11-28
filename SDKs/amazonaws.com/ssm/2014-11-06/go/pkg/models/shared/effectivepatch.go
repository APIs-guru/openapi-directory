package shared

// EffectivePatch
// The <code>EffectivePatch</code> structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.
type EffectivePatch struct {
	Patch       *Patch       `json:"Patch,omitempty"`
	PatchStatus *PatchStatus `json:"PatchStatus,omitempty"`
}

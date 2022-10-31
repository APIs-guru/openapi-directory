package shared

type EffectivePatch struct {
	Patch       *Patch       `json:"Patch,omitempty"`
	PatchStatus *PatchStatus `json:"PatchStatus,omitempty"`
}

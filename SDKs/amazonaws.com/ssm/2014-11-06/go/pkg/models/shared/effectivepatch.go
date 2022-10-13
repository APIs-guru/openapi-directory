package shared

type EffectivePatch struct {
	Patch       *Patch       `json:"Patch"`
	PatchStatus *PatchStatus `json:"PatchStatus"`
}

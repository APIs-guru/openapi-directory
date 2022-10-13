package shared

type PatchOrchestratorFilter struct {
	Key    *string  `json:"Key"`
	Values []string `json:"Values"`
}

package shared

type DismissDecision struct {
	DismissTime *string `json:"dismissTime,omitempty"`
	Implicit    *bool   `json:"implicit,omitempty"`
}

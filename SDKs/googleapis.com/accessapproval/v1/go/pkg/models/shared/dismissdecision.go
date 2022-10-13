package shared

type DismissDecision struct {
	DismissTime *string `json:"dismissTime"`
	Implicit    *bool   `json:"implicit"`
}

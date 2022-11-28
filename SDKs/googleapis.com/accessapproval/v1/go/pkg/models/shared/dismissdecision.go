package shared

// DismissDecision
// A decision that has been made to dismiss an approval request.
type DismissDecision struct {
	DismissTime *string `json:"dismissTime,omitempty"`
	Implicit    *bool   `json:"implicit,omitempty"`
}

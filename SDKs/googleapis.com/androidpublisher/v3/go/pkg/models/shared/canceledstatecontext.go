package shared

// CanceledStateContext
// Information specific to a subscription in canceled state.
type CanceledStateContext struct {
	DeveloperInitiatedCancellation map[string]interface{}     `json:"developerInitiatedCancellation,omitempty"`
	ReplacementCancellation        map[string]interface{}     `json:"replacementCancellation,omitempty"`
	SystemInitiatedCancellation    map[string]interface{}     `json:"systemInitiatedCancellation,omitempty"`
	UserInitiatedCancellation      *UserInitiatedCancellation `json:"userInitiatedCancellation,omitempty"`
}

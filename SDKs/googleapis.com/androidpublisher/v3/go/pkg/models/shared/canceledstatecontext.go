package shared

type CanceledStateContext struct {
	DeveloperInitiatedCancellation map[string]interface{}     `json:"developerInitiatedCancellation"`
	ReplacementCancellation        map[string]interface{}     `json:"replacementCancellation"`
	SystemInitiatedCancellation    map[string]interface{}     `json:"systemInitiatedCancellation"`
	UserInitiatedCancellation      *UserInitiatedCancellation `json:"userInitiatedCancellation"`
}

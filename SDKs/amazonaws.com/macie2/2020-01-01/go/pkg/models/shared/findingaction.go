package shared

// FindingAction
// Provides information about an action that occurred for a resource and produced a policy finding.
type FindingAction struct {
	ActionType     *FindingActionTypeEnum `json:"actionType,omitempty"`
	APICallDetails *APICallDetails        `json:"apiCallDetails,omitempty"`
}

package shared

// Action
// The action that starts at the beginning of an incident. The response plan defines the action.
type Action struct {
	SsmAutomation *SsmAutomation `json:"ssmAutomation,omitempty"`
}

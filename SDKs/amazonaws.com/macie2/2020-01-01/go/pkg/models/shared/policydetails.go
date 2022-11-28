package shared

// PolicyDetails
// Provides the details of a policy finding.
type PolicyDetails struct {
	Action *FindingAction `json:"action,omitempty"`
	Actor  *FindingActor  `json:"actor,omitempty"`
}

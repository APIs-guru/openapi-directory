package shared

// OpsItemIdentity
// Information about the user or resource that created an OpsItem event.
type OpsItemIdentity struct {
	Arn *string `json:"Arn,omitempty"`
}

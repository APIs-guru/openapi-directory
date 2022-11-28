package shared

// AttachedManagedPolicy
// A structure that stores the details of the IAM managed policy.
type AttachedManagedPolicy struct {
	Arn  *string `json:"Arn,omitempty"`
	Name *string `json:"Name,omitempty"`
}

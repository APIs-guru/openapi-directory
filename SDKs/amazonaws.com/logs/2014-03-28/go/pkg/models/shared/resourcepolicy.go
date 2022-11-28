package shared

// ResourcePolicy
// A policy enabling one or more entities to put logs to a log group in this account.
type ResourcePolicy struct {
	LastUpdatedTime *int64  `json:"lastUpdatedTime,omitempty"`
	PolicyDocument  *string `json:"policyDocument,omitempty"`
	PolicyName      *string `json:"policyName,omitempty"`
}

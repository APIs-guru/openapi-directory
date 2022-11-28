package shared

// AwsIamAttachedManagedPolicy
// A managed policy that is attached to an IAM principal.
type AwsIamAttachedManagedPolicy struct {
	PolicyArn  *string `json:"PolicyArn,omitempty"`
	PolicyName *string `json:"PolicyName,omitempty"`
}

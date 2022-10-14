package shared

type AwsIamAttachedManagedPolicy struct {
	PolicyArn  *string `json:"PolicyArn,omitempty"`
	PolicyName *string `json:"PolicyName,omitempty"`
}

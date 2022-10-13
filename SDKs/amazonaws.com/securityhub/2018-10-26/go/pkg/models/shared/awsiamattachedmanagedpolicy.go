package shared

type AwsIamAttachedManagedPolicy struct {
	PolicyArn  *string `json:"PolicyArn"`
	PolicyName *string `json:"PolicyName"`
}

package shared

// AwsRdsDbInstanceAssociatedRole
// An IAM role associated with the DB instance.
type AwsRdsDbInstanceAssociatedRole struct {
	FeatureName *string `json:"FeatureName,omitempty"`
	RoleArn     *string `json:"RoleArn,omitempty"`
	Status      *string `json:"Status,omitempty"`
}

package shared

type AwsRdsDbInstanceAssociatedRole struct {
	FeatureName *string `json:"FeatureName"`
	RoleArn     *string `json:"RoleArn"`
	Status      *string `json:"Status"`
}

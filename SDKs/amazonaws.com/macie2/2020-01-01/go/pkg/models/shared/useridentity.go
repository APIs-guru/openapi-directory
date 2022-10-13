package shared

type UserIdentity struct {
	AssumedRole   *AssumedRole          `json:"assumedRole"`
	AwsAccount    *AwsAccount           `json:"awsAccount"`
	AwsService    *AwsService           `json:"awsService"`
	FederatedUser *FederatedUser        `json:"federatedUser"`
	IamUser       *IamUser              `json:"iamUser"`
	Root          *UserIdentityRoot     `json:"root"`
	Type          *UserIdentityTypeEnum `json:"type"`
}

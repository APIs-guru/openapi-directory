package shared



type UserIdentity struct {
    AssumedRole *AssumedRole `json:"assumedRole,omitempty"`
    AwsAccount *AwsAccount `json:"awsAccount,omitempty"`
    AwsService *AwsService `json:"awsService,omitempty"`
    FederatedUser *FederatedUser `json:"federatedUser,omitempty"`
    IamUser *IamUser `json:"iamUser,omitempty"`
    Root *UserIdentityRoot `json:"root,omitempty"`
    Type *UserIdentityTypeEnum `json:"type,omitempty"`
    
}


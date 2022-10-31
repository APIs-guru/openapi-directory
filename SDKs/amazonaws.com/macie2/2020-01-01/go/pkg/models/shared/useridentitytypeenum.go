package shared




type UserIdentityTypeEnum string

const (
    UserIdentityTypeEnumAssumedRole UserIdentityTypeEnum = "AssumedRole"
UserIdentityTypeEnumIamUser UserIdentityTypeEnum = "IAMUser"
UserIdentityTypeEnumFederatedUser UserIdentityTypeEnum = "FederatedUser"
UserIdentityTypeEnumRoot UserIdentityTypeEnum = "Root"
UserIdentityTypeEnumAwsAccount UserIdentityTypeEnum = "AWSAccount"
UserIdentityTypeEnumAwsService UserIdentityTypeEnum = "AWSService"
)



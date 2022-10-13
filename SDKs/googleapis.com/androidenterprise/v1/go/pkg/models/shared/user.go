package shared

type UserAccountTypeEnum string

const (
	UserAccountTypeEnumDeviceAccount UserAccountTypeEnum = "deviceAccount"
	UserAccountTypeEnumUserAccount   UserAccountTypeEnum = "userAccount"
)

type UserManagementTypeEnum string

const (
	UserManagementTypeEnumGoogleManaged UserManagementTypeEnum = "googleManaged"
	UserManagementTypeEnumEmmManaged    UserManagementTypeEnum = "emmManaged"
)

type User struct {
	AccountIdentifier *string                 `json:"accountIdentifier"`
	AccountType       *UserAccountTypeEnum    `json:"accountType"`
	DisplayName       *string                 `json:"displayName"`
	ID                *string                 `json:"id"`
	ManagementType    *UserManagementTypeEnum `json:"managementType"`
	PrimaryEmail      *string                 `json:"primaryEmail"`
}

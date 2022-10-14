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
	AccountIdentifier *string                 `json:"accountIdentifier,omitempty"`
	AccountType       *UserAccountTypeEnum    `json:"accountType,omitempty"`
	DisplayName       *string                 `json:"displayName,omitempty"`
	ID                *string                 `json:"id,omitempty"`
	ManagementType    *UserManagementTypeEnum `json:"managementType,omitempty"`
	PrimaryEmail      *string                 `json:"primaryEmail,omitempty"`
}

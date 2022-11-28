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

// User
// A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: - The Google managed domain identity model requires synchronization to Google account sources (via primaryEmail). - The managed Google Play Accounts identity model provides a dynamic means for enterprises to create user or device accounts as needed. These accounts provide access to managed Google Play.
type User struct {
	AccountIdentifier *string                 `json:"accountIdentifier,omitempty"`
	AccountType       *UserAccountTypeEnum    `json:"accountType,omitempty"`
	DisplayName       *string                 `json:"displayName,omitempty"`
	ID                *string                 `json:"id,omitempty"`
	ManagementType    *UserManagementTypeEnum `json:"managementType,omitempty"`
	PrimaryEmail      *string                 `json:"primaryEmail,omitempty"`
}

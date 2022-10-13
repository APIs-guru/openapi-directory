package shared

type CreateUserProfileRequest struct {
	AllowSelfManagement *bool   `json:"AllowSelfManagement"`
	IamUserArn          string  `json:"IamUserArn"`
	SSHPublicKey        *string `json:"SshPublicKey"`
	SSHUsername         *string `json:"SshUsername"`
}

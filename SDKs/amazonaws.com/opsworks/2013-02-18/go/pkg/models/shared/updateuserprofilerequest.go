package shared

type UpdateUserProfileRequest struct {
	AllowSelfManagement *bool   `json:"AllowSelfManagement,omitempty"`
	IamUserArn          string  `json:"IamUserArn"`
	SSHPublicKey        *string `json:"SshPublicKey,omitempty"`
	SSHUsername         *string `json:"SshUsername,omitempty"`
}

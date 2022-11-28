package shared

// UserProfile
// Describes a user's SSH information.
type UserProfile struct {
	AllowSelfManagement *bool   `json:"AllowSelfManagement,omitempty"`
	IamUserArn          *string `json:"IamUserArn,omitempty"`
	Name                *string `json:"Name,omitempty"`
	SSHPublicKey        *string `json:"SshPublicKey,omitempty"`
	SSHUsername         *string `json:"SshUsername,omitempty"`
}

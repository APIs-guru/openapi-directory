package shared

type UserProfile struct {
	AllowSelfManagement *bool   `json:"AllowSelfManagement"`
	IamUserArn          *string `json:"IamUserArn"`
	Name                *string `json:"Name"`
	SSHPublicKey        *string `json:"SshPublicKey"`
	SSHUsername         *string `json:"SshUsername"`
}

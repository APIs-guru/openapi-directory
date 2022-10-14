package shared

type SelfUserProfile struct {
	IamUserArn   *string `json:"IamUserArn,omitempty"`
	Name         *string `json:"Name,omitempty"`
	SSHPublicKey *string `json:"SshPublicKey,omitempty"`
	SSHUsername  *string `json:"SshUsername,omitempty"`
}

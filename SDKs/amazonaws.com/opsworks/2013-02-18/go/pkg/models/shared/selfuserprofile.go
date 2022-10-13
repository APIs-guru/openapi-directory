package shared

type SelfUserProfile struct {
	IamUserArn   *string `json:"IamUserArn"`
	Name         *string `json:"Name"`
	SSHPublicKey *string `json:"SshPublicKey"`
	SSHUsername  *string `json:"SshUsername"`
}

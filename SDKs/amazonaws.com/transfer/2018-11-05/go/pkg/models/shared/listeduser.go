package shared

type ListedUser struct {
	Arn               string                 `json:"Arn"`
	HomeDirectory     *string                `json:"HomeDirectory"`
	HomeDirectoryType *HomeDirectoryTypeEnum `json:"HomeDirectoryType"`
	Role              *string                `json:"Role"`
	SSHPublicKeyCount *int64                 `json:"SshPublicKeyCount"`
	UserName          *string                `json:"UserName"`
}

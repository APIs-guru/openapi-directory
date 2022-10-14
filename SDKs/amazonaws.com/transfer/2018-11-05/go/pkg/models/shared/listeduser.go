package shared

type ListedUser struct {
	Arn               string                 `json:"Arn"`
	HomeDirectory     *string                `json:"HomeDirectory,omitempty"`
	HomeDirectoryType *HomeDirectoryTypeEnum `json:"HomeDirectoryType,omitempty"`
	Role              *string                `json:"Role,omitempty"`
	SSHPublicKeyCount *int64                 `json:"SshPublicKeyCount,omitempty"`
	UserName          *string                `json:"UserName,omitempty"`
}

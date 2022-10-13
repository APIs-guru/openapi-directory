package shared

type DescribedUser struct {
	Arn                   string                  `json:"Arn"`
	HomeDirectory         *string                 `json:"HomeDirectory"`
	HomeDirectoryMappings []HomeDirectoryMapEntry `json:"HomeDirectoryMappings"`
	HomeDirectoryType     *HomeDirectoryTypeEnum  `json:"HomeDirectoryType"`
	Policy                *string                 `json:"Policy"`
	PosixProfile          *PosixProfile           `json:"PosixProfile"`
	Role                  *string                 `json:"Role"`
	SSHPublicKeys         []SSHPublicKey          `json:"SshPublicKeys"`
	Tags                  []Tag                   `json:"Tags"`
	UserName              *string                 `json:"UserName"`
}

package shared

// DescribedUser
// Describes the properties of a user that was specified.
type DescribedUser struct {
	Arn                   string                  `json:"Arn"`
	HomeDirectory         *string                 `json:"HomeDirectory,omitempty"`
	HomeDirectoryMappings []HomeDirectoryMapEntry `json:"HomeDirectoryMappings,omitempty"`
	HomeDirectoryType     *HomeDirectoryTypeEnum  `json:"HomeDirectoryType,omitempty"`
	Policy                *string                 `json:"Policy,omitempty"`
	PosixProfile          *PosixProfile           `json:"PosixProfile,omitempty"`
	Role                  *string                 `json:"Role,omitempty"`
	SSHPublicKeys         []SSHPublicKey          `json:"SshPublicKeys,omitempty"`
	Tags                  []Tag                   `json:"Tags,omitempty"`
	UserName              *string                 `json:"UserName,omitempty"`
}

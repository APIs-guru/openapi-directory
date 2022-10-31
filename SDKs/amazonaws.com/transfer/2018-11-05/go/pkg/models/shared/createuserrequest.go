package shared

type CreateUserRequest struct {
	HomeDirectory         *string                 `json:"HomeDirectory,omitempty"`
	HomeDirectoryMappings []HomeDirectoryMapEntry `json:"HomeDirectoryMappings,omitempty"`
	HomeDirectoryType     *HomeDirectoryTypeEnum  `json:"HomeDirectoryType,omitempty"`
	Policy                *string                 `json:"Policy,omitempty"`
	PosixProfile          *PosixProfile           `json:"PosixProfile,omitempty"`
	Role                  string                  `json:"Role"`
	ServerID              string                  `json:"ServerId"`
	SSHPublicKeyBody      *string                 `json:"SshPublicKeyBody,omitempty"`
	Tags                  []Tag                   `json:"Tags,omitempty"`
	UserName              string                  `json:"UserName"`
}

package shared

type CreateUserRequest struct {
	HomeDirectory         *string                 `json:"HomeDirectory"`
	HomeDirectoryMappings []HomeDirectoryMapEntry `json:"HomeDirectoryMappings"`
	HomeDirectoryType     *HomeDirectoryTypeEnum  `json:"HomeDirectoryType"`
	Policy                *string                 `json:"Policy"`
	PosixProfile          *PosixProfile           `json:"PosixProfile"`
	Role                  string                  `json:"Role"`
	ServerID              string                  `json:"ServerId"`
	SSHPublicKeyBody      *string                 `json:"SshPublicKeyBody"`
	Tags                  []Tag                   `json:"Tags"`
	UserName              string                  `json:"UserName"`
}

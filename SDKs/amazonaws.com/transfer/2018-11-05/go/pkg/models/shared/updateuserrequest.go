package shared

type UpdateUserRequest struct {
	HomeDirectory         *string                 `json:"HomeDirectory"`
	HomeDirectoryMappings []HomeDirectoryMapEntry `json:"HomeDirectoryMappings"`
	HomeDirectoryType     *HomeDirectoryTypeEnum  `json:"HomeDirectoryType"`
	Policy                *string                 `json:"Policy"`
	PosixProfile          *PosixProfile           `json:"PosixProfile"`
	Role                  *string                 `json:"Role"`
	ServerID              string                  `json:"ServerId"`
	UserName              string                  `json:"UserName"`
}

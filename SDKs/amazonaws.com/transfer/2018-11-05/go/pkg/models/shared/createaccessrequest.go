package shared

type CreateAccessRequest struct {
	ExternalID            string                  `json:"ExternalId"`
	HomeDirectory         *string                 `json:"HomeDirectory"`
	HomeDirectoryMappings []HomeDirectoryMapEntry `json:"HomeDirectoryMappings"`
	HomeDirectoryType     *HomeDirectoryTypeEnum  `json:"HomeDirectoryType"`
	Policy                *string                 `json:"Policy"`
	PosixProfile          *PosixProfile           `json:"PosixProfile"`
	Role                  string                  `json:"Role"`
	ServerID              string                  `json:"ServerId"`
}

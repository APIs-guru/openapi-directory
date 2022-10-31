package shared

type DescribedAccess struct {
	ExternalID            *string                 `json:"ExternalId,omitempty"`
	HomeDirectory         *string                 `json:"HomeDirectory,omitempty"`
	HomeDirectoryMappings []HomeDirectoryMapEntry `json:"HomeDirectoryMappings,omitempty"`
	HomeDirectoryType     *HomeDirectoryTypeEnum  `json:"HomeDirectoryType,omitempty"`
	Policy                *string                 `json:"Policy,omitempty"`
	PosixProfile          *PosixProfile           `json:"PosixProfile,omitempty"`
	Role                  *string                 `json:"Role,omitempty"`
}

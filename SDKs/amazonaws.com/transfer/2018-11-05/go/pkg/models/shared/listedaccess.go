package shared

type ListedAccess struct {
	ExternalID        *string                `json:"ExternalId,omitempty"`
	HomeDirectory     *string                `json:"HomeDirectory,omitempty"`
	HomeDirectoryType *HomeDirectoryTypeEnum `json:"HomeDirectoryType,omitempty"`
	Role              *string                `json:"Role,omitempty"`
}

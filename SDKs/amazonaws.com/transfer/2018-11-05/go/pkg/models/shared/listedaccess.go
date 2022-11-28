package shared

// ListedAccess
// Lists the properties for one or more specified associated accesses.
type ListedAccess struct {
	ExternalID        *string                `json:"ExternalId,omitempty"`
	HomeDirectory     *string                `json:"HomeDirectory,omitempty"`
	HomeDirectoryType *HomeDirectoryTypeEnum `json:"HomeDirectoryType,omitempty"`
	Role              *string                `json:"Role,omitempty"`
}

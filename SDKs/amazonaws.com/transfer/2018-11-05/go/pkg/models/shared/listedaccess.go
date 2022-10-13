package shared

type ListedAccess struct {
	ExternalID        *string                `json:"ExternalId"`
	HomeDirectory     *string                `json:"HomeDirectory"`
	HomeDirectoryType *HomeDirectoryTypeEnum `json:"HomeDirectoryType"`
	Role              *string                `json:"Role"`
}

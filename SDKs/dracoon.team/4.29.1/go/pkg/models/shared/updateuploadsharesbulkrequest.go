package shared

// UpdateUploadSharesBulkRequest
// Request model for updating a list of Download Shares
type UpdateUploadSharesBulkRequest struct {
	Expiration             *ObjectExpiration `json:"expiration,omitempty"`
	FilesExpiryPeriod      *int32            `json:"filesExpiryPeriod,omitempty"`
	MaxSize                *int64            `json:"maxSize,omitempty"`
	MaxSlots               *int32            `json:"maxSlots,omitempty"`
	ObjectIds              []int64           `json:"objectIds"`
	ResetFilesExpiryPeriod *bool             `json:"resetFilesExpiryPeriod,omitempty"`
	ResetMaxSize           *bool             `json:"resetMaxSize,omitempty"`
	ResetMaxSlots          *bool             `json:"resetMaxSlots,omitempty"`
	ShowCreatorName        *bool             `json:"showCreatorName,omitempty"`
	ShowCreatorUsername    *bool             `json:"showCreatorUsername,omitempty"`
	ShowUploadedFiles      *bool             `json:"showUploadedFiles,omitempty"`
}

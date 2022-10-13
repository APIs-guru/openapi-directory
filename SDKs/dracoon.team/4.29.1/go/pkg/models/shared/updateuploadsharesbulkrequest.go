package shared

type UpdateUploadSharesBulkRequest struct {
	Expiration             *ObjectExpiration `json:"expiration"`
	FilesExpiryPeriod      *int32            `json:"filesExpiryPeriod"`
	MaxSize                *int64            `json:"maxSize"`
	MaxSlots               *int32            `json:"maxSlots"`
	ObjectIds              []int64           `json:"objectIds"`
	ResetFilesExpiryPeriod *bool             `json:"resetFilesExpiryPeriod"`
	ResetMaxSize           *bool             `json:"resetMaxSize"`
	ResetMaxSlots          *bool             `json:"resetMaxSlots"`
	ShowCreatorName        *bool             `json:"showCreatorName"`
	ShowCreatorUsername    *bool             `json:"showCreatorUsername"`
	ShowUploadedFiles      *bool             `json:"showUploadedFiles"`
}

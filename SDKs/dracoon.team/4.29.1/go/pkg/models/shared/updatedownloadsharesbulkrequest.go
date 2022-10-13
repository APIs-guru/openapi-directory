package shared

type UpdateDownloadSharesBulkRequest struct {
	Expiration          *ObjectExpiration `json:"expiration"`
	MaxDownloads        *int32            `json:"maxDownloads"`
	ObjectIds           []int64           `json:"objectIds"`
	ResetMaxDownloads   *bool             `json:"resetMaxDownloads"`
	ShowCreatorName     *bool             `json:"showCreatorName"`
	ShowCreatorUsername *bool             `json:"showCreatorUsername"`
}

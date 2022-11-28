package shared

// UpdateDownloadSharesBulkRequest
// Request model for updating a list of Download Shares
type UpdateDownloadSharesBulkRequest struct {
	Expiration          *ObjectExpiration `json:"expiration,omitempty"`
	MaxDownloads        *int32            `json:"maxDownloads,omitempty"`
	ObjectIds           []int64           `json:"objectIds"`
	ResetMaxDownloads   *bool             `json:"resetMaxDownloads,omitempty"`
	ShowCreatorName     *bool             `json:"showCreatorName,omitempty"`
	ShowCreatorUsername *bool             `json:"showCreatorUsername,omitempty"`
}

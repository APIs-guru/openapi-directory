package shared

type FindDevicesByOwnerResponse struct {
	Devices       []Device `json:"devices"`
	NextPageToken *string  `json:"nextPageToken"`
	TotalSize     *int32   `json:"totalSize"`
}

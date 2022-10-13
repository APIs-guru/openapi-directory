package shared

type FindDevicesByDeviceIdentifierResponse struct {
	Devices       []Device `json:"devices"`
	NextPageToken *string  `json:"nextPageToken"`
	TotalSize     *int32   `json:"totalSize"`
}

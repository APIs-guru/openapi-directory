package shared

type CustomerListDevicesResponse struct {
	Devices       []Device `json:"devices"`
	NextPageToken *string  `json:"nextPageToken"`
}

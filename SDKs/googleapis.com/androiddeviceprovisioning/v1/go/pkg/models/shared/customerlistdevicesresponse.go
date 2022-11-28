package shared

// CustomerListDevicesResponse
// Response message of customer's liting devices.
type CustomerListDevicesResponse struct {
	Devices       []Device `json:"devices,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}

package shared

// ListDevicesResponse
// Response to a request to list devices for a given enterprise.
type ListDevicesResponse struct {
	Devices       []Device `json:"devices,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}

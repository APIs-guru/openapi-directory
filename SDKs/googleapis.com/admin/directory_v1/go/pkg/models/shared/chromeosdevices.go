package shared

type ChromeOsDevices struct {
	Chromeosdevices []ChromeOsDevice `json:"chromeosdevices,omitempty"`
	Etag            *string          `json:"etag,omitempty"`
	Kind            *string          `json:"kind,omitempty"`
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
}

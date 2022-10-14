package shared

type MobileDevices struct {
	Etag          *string        `json:"etag,omitempty"`
	Kind          *string        `json:"kind,omitempty"`
	Mobiledevices []MobileDevice `json:"mobiledevices,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}

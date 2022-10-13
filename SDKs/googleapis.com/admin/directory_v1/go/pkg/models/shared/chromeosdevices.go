package shared

type ChromeOsDevices struct {
	Chromeosdevices []ChromeOsDevice `json:"chromeosdevices"`
	Etag            *string          `json:"etag"`
	Kind            *string          `json:"kind"`
	NextPageToken   *string          `json:"nextPageToken"`
}

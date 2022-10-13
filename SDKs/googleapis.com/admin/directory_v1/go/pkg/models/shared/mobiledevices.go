package shared

type MobileDevices struct {
	Etag          *string        `json:"etag"`
	Kind          *string        `json:"kind"`
	Mobiledevices []MobileDevice `json:"mobiledevices"`
	NextPageToken *string        `json:"nextPageToken"`
}

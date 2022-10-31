package shared

type CustomChannels struct {
	Etag          *string         `json:"etag,omitempty"`
	Items         []CustomChannel `json:"items,omitempty"`
	Kind          *string         `json:"kind,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
}

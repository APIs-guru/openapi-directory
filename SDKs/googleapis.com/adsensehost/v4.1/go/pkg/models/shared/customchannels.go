package shared

type CustomChannels struct {
	Etag          *string         `json:"etag"`
	Items         []CustomChannel `json:"items"`
	Kind          *string         `json:"kind"`
	NextPageToken *string         `json:"nextPageToken"`
}

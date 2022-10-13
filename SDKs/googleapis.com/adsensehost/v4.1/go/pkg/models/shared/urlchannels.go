package shared

type URLChannels struct {
	Etag          *string      `json:"etag"`
	Items         []URLChannel `json:"items"`
	Kind          *string      `json:"kind"`
	NextPageToken *string      `json:"nextPageToken"`
}

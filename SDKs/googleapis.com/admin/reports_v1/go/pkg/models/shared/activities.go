package shared

type Activities struct {
	Etag          *string    `json:"etag"`
	Items         []Activity `json:"items"`
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
}

package shared

type Activities struct {
	Etag          *string    `json:"etag,omitempty"`
	Items         []Activity `json:"items,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}

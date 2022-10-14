package shared

type SavedAdStyles struct {
	Etag          *string        `json:"etag,omitempty"`
	Items         []SavedAdStyle `json:"items,omitempty"`
	Kind          *string        `json:"kind,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}

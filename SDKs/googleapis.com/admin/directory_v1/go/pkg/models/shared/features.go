package shared

// Features
// Public API: Resources.features
type Features struct {
	Etag          *string   `json:"etag,omitempty"`
	Features      []Feature `json:"features,omitempty"`
	Kind          *string   `json:"kind,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}

package shared

// Buildings
// Public API: Resources.buildings
type Buildings struct {
	Buildings     []Building `json:"buildings,omitempty"`
	Etag          *string    `json:"etag,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}

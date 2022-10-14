package shared

type SavedReports struct {
	Etag          *string       `json:"etag,omitempty"`
	Items         []SavedReport `json:"items,omitempty"`
	Kind          *string       `json:"kind,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}

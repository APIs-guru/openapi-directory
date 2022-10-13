package shared

type SavedReports struct {
	Etag          *string       `json:"etag"`
	Items         []SavedReport `json:"items"`
	Kind          *string       `json:"kind"`
	NextPageToken *string       `json:"nextPageToken"`
}

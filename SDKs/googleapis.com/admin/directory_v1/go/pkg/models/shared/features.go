package shared

type Features struct {
	Etag          *string   `json:"etag"`
	Features      []Feature `json:"features"`
	Kind          *string   `json:"kind"`
	NextPageToken *string   `json:"nextPageToken"`
}

package shared

type Roles struct {
	Etag          *string `json:"etag"`
	Items         []Role  `json:"items"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}

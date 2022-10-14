package shared

type Roles struct {
	Etag          *string `json:"etag,omitempty"`
	Items         []Role  `json:"items,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}

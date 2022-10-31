package shared

type Members struct {
	Etag          *string  `json:"etag,omitempty"`
	Kind          *string  `json:"kind,omitempty"`
	Members       []Member `json:"members,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}

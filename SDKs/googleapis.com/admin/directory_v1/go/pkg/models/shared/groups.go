package shared

type Groups struct {
	Etag          *string `json:"etag,omitempty"`
	Groups        []Group `json:"groups,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}

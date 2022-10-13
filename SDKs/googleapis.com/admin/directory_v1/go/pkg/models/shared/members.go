package shared

type Members struct {
	Etag          *string  `json:"etag"`
	Kind          *string  `json:"kind"`
	Members       []Member `json:"members"`
	NextPageToken *string  `json:"nextPageToken"`
}

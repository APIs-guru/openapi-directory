package shared

type Groups struct {
	Etag          *string `json:"etag"`
	Groups        []Group `json:"groups"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}

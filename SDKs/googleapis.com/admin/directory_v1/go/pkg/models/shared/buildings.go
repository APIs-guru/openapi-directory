package shared

type Buildings struct {
	Buildings     []Building `json:"buildings"`
	Etag          *string    `json:"etag"`
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
}

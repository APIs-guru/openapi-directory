package shared

type Tokens struct {
	Etag  *string `json:"etag"`
	Items []Token `json:"items"`
	Kind  *string `json:"kind"`
}

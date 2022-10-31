package shared

type Tokens struct {
	Etag  *string `json:"etag,omitempty"`
	Items []Token `json:"items,omitempty"`
	Kind  *string `json:"kind,omitempty"`
}

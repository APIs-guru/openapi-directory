package shared

type Aliases struct {
	Aliases []interface{} `json:"aliases"`
	Etag    *string       `json:"etag"`
	Kind    *string       `json:"kind"`
}

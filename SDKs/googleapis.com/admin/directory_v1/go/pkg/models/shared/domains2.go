package shared

type Domains2 struct {
	Domains []Domains `json:"domains"`
	Etag    *string   `json:"etag"`
	Kind    *string   `json:"kind"`
}

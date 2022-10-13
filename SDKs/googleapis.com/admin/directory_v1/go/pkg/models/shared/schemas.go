package shared

type Schemas struct {
	Etag    *string  `json:"etag"`
	Kind    *string  `json:"kind"`
	Schemas []Schema `json:"schemas"`
}

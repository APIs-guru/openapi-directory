package shared

type Asps struct {
	Etag  *string `json:"etag"`
	Items []Asp   `json:"items"`
	Kind  *string `json:"kind"`
}

package shared

type Asps struct {
	Etag  *string `json:"etag,omitempty"`
	Items []Asp   `json:"items,omitempty"`
	Kind  *string `json:"kind,omitempty"`
}

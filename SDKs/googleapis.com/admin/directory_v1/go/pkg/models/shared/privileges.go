package shared

type Privileges struct {
	Etag  *string     `json:"etag,omitempty"`
	Items []Privilege `json:"items,omitempty"`
	Kind  *string     `json:"kind,omitempty"`
}

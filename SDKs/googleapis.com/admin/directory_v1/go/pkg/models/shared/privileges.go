package shared

type Privileges struct {
	Etag  *string     `json:"etag"`
	Items []Privilege `json:"items"`
	Kind  *string     `json:"kind"`
}

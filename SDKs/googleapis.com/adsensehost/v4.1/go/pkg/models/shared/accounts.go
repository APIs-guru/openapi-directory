package shared

type Accounts struct {
	Etag  *string   `json:"etag"`
	Items []Account `json:"items"`
	Kind  *string   `json:"kind"`
}

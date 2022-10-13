package shared

type AccountsList struct {
	Items []Account `json:"items"`
	Kind  *string   `json:"kind"`
}

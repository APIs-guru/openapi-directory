package shared

type Payments struct {
	Items []Payment `json:"items"`
	Kind  *string   `json:"kind"`
}

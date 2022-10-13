package shared

type Alerts struct {
	Items []Alert `json:"items"`
	Kind  *string `json:"kind"`
}

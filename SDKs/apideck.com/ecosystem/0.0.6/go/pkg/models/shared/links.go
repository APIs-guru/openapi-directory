package shared

type Links struct {
	Current  string  `json:"current"`
	Next     *string `json:"next"`
	Previous *string `json:"previous"`
}

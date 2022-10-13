package shared

type Message struct {
	Body    Body    `json:"Body"`
	Subject Content `json:"Subject"`
}

package shared

type Message struct {
	Content string   `json:"content"`
	From    string   `json:"from"`
	To      []string `json:"to"`
}

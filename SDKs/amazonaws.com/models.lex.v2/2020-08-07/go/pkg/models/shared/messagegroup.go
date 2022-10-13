package shared

type MessageGroup struct {
	Message    Message   `json:"message"`
	Variations []Message `json:"variations"`
}

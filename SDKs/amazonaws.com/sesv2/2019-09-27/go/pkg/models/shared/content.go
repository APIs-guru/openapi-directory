package shared

type Content struct {
	Charset *string `json:"Charset,omitempty"`
	Data    string  `json:"Data"`
}

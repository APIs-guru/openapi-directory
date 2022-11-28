package shared

// CustomPayload
// A custom response string that Amazon Lex sends to your application. You define the content and structure the string.
type CustomPayload struct {
	Value string `json:"value"`
}

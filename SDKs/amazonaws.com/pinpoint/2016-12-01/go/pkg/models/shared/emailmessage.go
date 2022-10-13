package shared

type EmailMessage struct {
	Body                      *string             `json:"Body"`
	FeedbackForwardingAddress *string             `json:"FeedbackForwardingAddress"`
	FromAddress               *string             `json:"FromAddress"`
	RawEmail                  *RawEmail           `json:"RawEmail"`
	ReplyToAddresses          []string            `json:"ReplyToAddresses"`
	SimpleEmail               *SimpleEmail        `json:"SimpleEmail"`
	Substitutions             map[string][]string `json:"Substitutions"`
}

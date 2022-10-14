package shared

type ListStreamConsumersOutput struct {
	Consumers []Consumer `json:"Consumers,omitempty"`
	NextToken *string    `json:"NextToken,omitempty"`
}

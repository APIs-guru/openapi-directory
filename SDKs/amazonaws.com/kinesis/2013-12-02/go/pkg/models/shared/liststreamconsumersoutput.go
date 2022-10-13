package shared

type ListStreamConsumersOutput struct {
	Consumers []Consumer `json:"Consumers"`
	NextToken *string    `json:"NextToken"`
}

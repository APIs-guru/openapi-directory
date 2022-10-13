package shared

type ListStreamsOutput struct {
	LastEvaluatedStreamArn *string  `json:"LastEvaluatedStreamArn"`
	Streams                []Stream `json:"Streams"`
}

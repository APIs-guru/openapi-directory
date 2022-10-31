package shared



type ListStreamsOutput struct {
    LastEvaluatedStreamArn *string `json:"LastEvaluatedStreamArn,omitempty"`
    Streams []Stream `json:"Streams,omitempty"`
    
}


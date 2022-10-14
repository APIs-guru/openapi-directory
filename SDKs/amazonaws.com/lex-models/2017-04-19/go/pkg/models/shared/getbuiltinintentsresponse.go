package shared

type GetBuiltinIntentsResponse struct {
	Intents   []BuiltinIntentMetadata `json:"intents,omitempty"`
	NextToken *string                 `json:"nextToken,omitempty"`
}

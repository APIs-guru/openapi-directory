package shared

type GetBuiltinIntentsResponse struct {
	Intents   []BuiltinIntentMetadata `json:"intents"`
	NextToken *string                 `json:"nextToken"`
}

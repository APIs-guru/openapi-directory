package shared

type GetIntentsResponse struct {
	Intents   []IntentMetadata `json:"intents"`
	NextToken *string          `json:"nextToken"`
}

package shared

type GetIntentVersionsResponse struct {
	Intents   []IntentMetadata `json:"intents"`
	NextToken *string          `json:"nextToken"`
}

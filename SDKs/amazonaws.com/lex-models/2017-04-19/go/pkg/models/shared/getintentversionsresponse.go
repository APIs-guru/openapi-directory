package shared

type GetIntentVersionsResponse struct {
	Intents   []IntentMetadata `json:"intents,omitempty"`
	NextToken *string          `json:"nextToken,omitempty"`
}

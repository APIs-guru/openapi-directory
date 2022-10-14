package shared

type GetIntentsResponse struct {
	Intents   []IntentMetadata `json:"intents,omitempty"`
	NextToken *string          `json:"nextToken,omitempty"`
}

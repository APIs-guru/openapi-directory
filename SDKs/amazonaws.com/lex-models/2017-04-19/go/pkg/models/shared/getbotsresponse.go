package shared



type GetBotsResponse struct {
    Bots []BotMetadata `json:"bots,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}


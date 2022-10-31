package shared



type GetUtterancesViewResponse struct {
    BotName *string `json:"botName,omitempty"`
    Utterances []UtteranceList `json:"utterances,omitempty"`
    
}


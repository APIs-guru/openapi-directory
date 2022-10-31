package shared



type ListSlotTypesResponse struct {
    BotID *string `json:"botId,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    LocaleID *string `json:"localeId,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SlotTypeSummaries []SlotTypeSummary `json:"slotTypeSummaries,omitempty"`
    
}


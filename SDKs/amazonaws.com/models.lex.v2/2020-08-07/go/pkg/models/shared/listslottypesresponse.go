package shared

type ListSlotTypesResponse struct {
	BotID             *string           `json:"botId"`
	BotVersion        *string           `json:"botVersion"`
	LocaleID          *string           `json:"localeId"`
	NextToken         *string           `json:"nextToken"`
	SlotTypeSummaries []SlotTypeSummary `json:"slotTypeSummaries"`
}

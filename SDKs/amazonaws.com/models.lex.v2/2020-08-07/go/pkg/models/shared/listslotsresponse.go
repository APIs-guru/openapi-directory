package shared

type ListSlotsResponse struct {
	BotID         *string       `json:"botId"`
	BotVersion    *string       `json:"botVersion"`
	IntentID      *string       `json:"intentId"`
	LocaleID      *string       `json:"localeId"`
	NextToken     *string       `json:"nextToken"`
	SlotSummaries []SlotSummary `json:"slotSummaries"`
}

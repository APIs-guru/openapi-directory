package shared

type ListSlotsResponse struct {
	BotID         *string       `json:"botId,omitempty"`
	BotVersion    *string       `json:"botVersion,omitempty"`
	IntentID      *string       `json:"intentId,omitempty"`
	LocaleID      *string       `json:"localeId,omitempty"`
	NextToken     *string       `json:"nextToken,omitempty"`
	SlotSummaries []SlotSummary `json:"slotSummaries,omitempty"`
}

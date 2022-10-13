package shared

type GetSlotTypeVersionsResponse struct {
	NextToken *string            `json:"nextToken"`
	SlotTypes []SlotTypeMetadata `json:"slotTypes"`
}

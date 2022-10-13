package shared

type GetSlotTypesResponse struct {
	NextToken *string            `json:"nextToken"`
	SlotTypes []SlotTypeMetadata `json:"slotTypes"`
}

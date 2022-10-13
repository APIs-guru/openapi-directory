package shared

type GetBuiltinSlotTypesResponse struct {
	NextToken *string                   `json:"nextToken"`
	SlotTypes []BuiltinSlotTypeMetadata `json:"slotTypes"`
}

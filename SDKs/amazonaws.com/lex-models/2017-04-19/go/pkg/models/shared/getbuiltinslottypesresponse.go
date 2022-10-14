package shared

type GetBuiltinSlotTypesResponse struct {
	NextToken *string                   `json:"nextToken,omitempty"`
	SlotTypes []BuiltinSlotTypeMetadata `json:"slotTypes,omitempty"`
}

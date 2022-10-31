package shared



type GetSlotTypesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    SlotTypes []SlotTypeMetadata `json:"slotTypes,omitempty"`
    
}


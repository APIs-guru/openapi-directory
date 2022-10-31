package shared



type GetSlotTypeVersionsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    SlotTypes []SlotTypeMetadata `json:"slotTypes,omitempty"`
    
}


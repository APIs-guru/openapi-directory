package shared



type SearchPlaceIndexForPositionResponse struct {
    Results []SearchForPositionResult `json:"Results"`
    Summary SearchPlaceIndexForPositionSummary `json:"Summary"`
    
}


package shared



type SearchPlaceIndexForTextResponse struct {
    Results []SearchForTextResult `json:"Results"`
    Summary SearchPlaceIndexForTextSummary `json:"Summary"`
    
}


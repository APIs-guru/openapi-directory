package shared



type ApigatewayListLocationsResponse struct {
    Locations []ApigatewayLocation `json:"locations,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}


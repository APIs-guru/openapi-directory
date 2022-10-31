package shared



type ApigatewayListApisResponse struct {
    Apis []ApigatewayAPI `json:"apis,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    UnreachableLocations []string `json:"unreachableLocations,omitempty"`
    
}


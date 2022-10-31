package shared



type ApigatewayListAPIConfigsResponse struct {
    APIConfigs []ApigatewayAPIConfig `json:"apiConfigs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    UnreachableLocations []string `json:"unreachableLocations,omitempty"`
    
}


package shared



type GoogleCloudLocationListLocationsResponse struct {
    Locations []GoogleCloudLocationLocation `json:"locations,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}


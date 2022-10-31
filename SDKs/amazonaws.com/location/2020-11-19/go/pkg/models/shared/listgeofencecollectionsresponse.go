package shared



type ListGeofenceCollectionsResponse struct {
    Entries []ListGeofenceCollectionsResponseEntry `json:"Entries"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


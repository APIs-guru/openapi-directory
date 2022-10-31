package shared



type ListActivitiesResponse struct {
    Activities []Activity `json:"activities,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}


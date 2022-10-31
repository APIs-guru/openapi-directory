package shared



type SearchAllAssignmentsResponse struct {
    Assignments []Assignment `json:"assignments,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}


package shared



type ListAssignmentsResponse struct {
    Assignments []Assignment `json:"assignments,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}


package shared



type ListRoutinesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Routines []Routine `json:"routines,omitempty"`
    
}


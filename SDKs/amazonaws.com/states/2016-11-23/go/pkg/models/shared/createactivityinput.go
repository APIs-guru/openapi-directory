package shared



type CreateActivityInput struct {
    Name string `json:"name"`
    Tags []Tag `json:"tags,omitempty"`
    
}


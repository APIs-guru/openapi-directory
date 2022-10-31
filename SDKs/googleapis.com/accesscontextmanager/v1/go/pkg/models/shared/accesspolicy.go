package shared



type AccessPolicy struct {
    Etag *string `json:"etag,omitempty"`
    Name *string `json:"name,omitempty"`
    Parent *string `json:"parent,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    Title *string `json:"title,omitempty"`
    
}


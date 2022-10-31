package shared



type TeamRequest struct {
    Description *string `json:"description,omitempty"`
    Gid *string `json:"gid,omitempty"`
    HTMLDescription *string `json:"html_description,omitempty"`
    Name *string `json:"name,omitempty"`
    Organization *string `json:"organization,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}


package shared



type EditableMetaData struct {
    Description *string `json:"description,omitempty"`
    Labels []string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Properties map[string]string `json:"properties,omitempty"`
    
}


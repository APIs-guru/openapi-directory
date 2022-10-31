package shared



type BasicError struct {
    DocumentationURL *string `json:"documentation_url,omitempty"`
    Message *string `json:"message,omitempty"`
    Status *string `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}


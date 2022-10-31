package shared



type ScimError struct {
    Detail *string `json:"detail,omitempty"`
    DocumentationURL *string `json:"documentation_url,omitempty"`
    Message *string `json:"message,omitempty"`
    Schemas []string `json:"schemas,omitempty"`
    ScimType *string `json:"scimType,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}


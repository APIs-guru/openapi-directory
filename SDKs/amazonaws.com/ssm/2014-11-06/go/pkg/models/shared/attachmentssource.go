package shared



type AttachmentsSource struct {
    Key *AttachmentsSourceKeyEnum `json:"Key,omitempty"`
    Name *string `json:"Name,omitempty"`
    Values []string `json:"Values,omitempty"`
    
}


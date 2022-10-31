package shared



type ResponseCard struct {
    ContentType *ContentTypeEnum `json:"contentType,omitempty"`
    GenericAttachments []GenericAttachment `json:"genericAttachments,omitempty"`
    Version *string `json:"version,omitempty"`
    
}


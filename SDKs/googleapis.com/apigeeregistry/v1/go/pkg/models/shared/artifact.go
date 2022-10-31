package shared



type Artifact struct {
    Contents *string `json:"contents,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Hash *string `json:"hash,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    Name *string `json:"name,omitempty"`
    SizeBytes *int32 `json:"sizeBytes,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}


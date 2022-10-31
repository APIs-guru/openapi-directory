package shared

import (
"time")

type AttachmentResponseParent struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

type AttachmentResponse struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    DownloadURL *string `json:"download_url,omitempty"`
    Gid *string `json:"gid,omitempty"`
    Host *string `json:"host,omitempty"`
    Name *string `json:"name,omitempty"`
    Parent *AttachmentResponseParent `json:"parent,omitempty"`
    ResourceSubtype *interface{} `json:"resource_subtype,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    ViewURL *string `json:"view_url,omitempty"`
    
}


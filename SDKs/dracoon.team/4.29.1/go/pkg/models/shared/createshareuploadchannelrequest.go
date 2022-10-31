package shared

import (
"time")

type CreateShareUploadChannelRequest struct {
    DirectS3Upload *bool `json:"directS3Upload,omitempty"`
    Name string `json:"name"`
    Password *string `json:"password,omitempty"`
    Size *int64 `json:"size,omitempty"`
    TimestampCreation *time.Time `json:"timestampCreation,omitempty"`
    TimestampModification *time.Time `json:"timestampModification,omitempty"`
    
}


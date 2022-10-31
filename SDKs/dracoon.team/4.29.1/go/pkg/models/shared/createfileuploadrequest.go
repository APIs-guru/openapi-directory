package shared

import (
"time")

type CreateFileUploadRequest struct {
    Classification *int32 `json:"classification,omitempty"`
    DirectS3Upload *bool `json:"directS3Upload,omitempty"`
    Expiration *ObjectExpiration `json:"expiration,omitempty"`
    Name string `json:"name"`
    Notes *string `json:"notes,omitempty"`
    ParentID int64 `json:"parentId"`
    Size *int64 `json:"size,omitempty"`
    TimestampCreation *time.Time `json:"timestampCreation,omitempty"`
    TimestampModification *time.Time `json:"timestampModification,omitempty"`
    
}


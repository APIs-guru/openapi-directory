package shared

import (
"time")

type CreateFolderRequest struct {
    Name string `json:"name"`
    Notes *string `json:"notes,omitempty"`
    ParentID int64 `json:"parentId"`
    TimestampCreation *time.Time `json:"timestampCreation,omitempty"`
    TimestampModification *time.Time `json:"timestampModification,omitempty"`
    
}


package shared

import (
	"time"
)

// PublicUploadedFileData
// File information
type PublicUploadedFileData struct {
	CreatedAt time.Time `json:"createdAt"`
	Hash      *string   `json:"hash,omitempty"`
	Name      string    `json:"name"`
	Size      int64     `json:"size"`
}

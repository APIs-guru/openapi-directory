package shared

import (
	"time"
)

type PublicUploadedFileData struct {
	CreatedAt time.Time `json:"createdAt"`
	Hash      *string   `json:"hash,omitempty"`
	Name      string    `json:"name"`
	Size      int64     `json:"size"`
}

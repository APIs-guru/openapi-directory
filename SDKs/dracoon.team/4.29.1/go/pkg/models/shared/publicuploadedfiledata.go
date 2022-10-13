package shared

import (
	"time"
)

type PublicUploadedFileData struct {
	CreatedAt time.Time `json:"createdAt"`
	Hash      *string   `json:"hash"`
	Name      string    `json:"name"`
	Size      int64     `json:"size"`
}

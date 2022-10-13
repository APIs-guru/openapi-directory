package shared

import (
	"time"
)

type Artifact struct {
	ArchiveDownloadURL string    `json:"archive_download_url"`
	CreatedAt          time.Time `json:"created_at"`
	Expired            bool      `json:"expired"`
	ExpiresAt          time.Time `json:"expires_at"`
	ID                 int64     `json:"id"`
	Name               string    `json:"name"`
	NodeID             string    `json:"node_id"`
	SizeInBytes        int64     `json:"size_in_bytes"`
	UpdatedAt          time.Time `json:"updated_at"`
	URL                string    `json:"url"`
}

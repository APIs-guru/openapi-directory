package shared

import (
	"time"
)

type FileEntity struct {
	Crc32            *string        `json:"crc32"`
	DisplayName      *string        `json:"display_name"`
	DownloadURI      *string        `json:"download_uri"`
	Md5              *string        `json:"md5"`
	MimeType         *string        `json:"mime_type"`
	Mtime            *time.Time     `json:"mtime"`
	Path             *string        `json:"path"`
	Permissions      *string        `json:"permissions"`
	Preview          *PreviewEntity `json:"preview"`
	PreviewID        *int32         `json:"preview_id"`
	PriorityColor    *string        `json:"priority_color"`
	ProvidedMtime    *time.Time     `json:"provided_mtime"`
	Region           *string        `json:"region"`
	Size             *int32         `json:"size"`
	SubfoldersLocked *bool          `json:"subfolders_locked?"`
	Type             *string        `json:"type"`
}

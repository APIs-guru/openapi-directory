package shared

import (
	"time"
)

// FileEntity
// List Folders by path
type FileEntity struct {
	Crc32            *string        `json:"crc32,omitempty"`
	DisplayName      *string        `json:"display_name,omitempty"`
	DownloadURI      *string        `json:"download_uri,omitempty"`
	Md5              *string        `json:"md5,omitempty"`
	MimeType         *string        `json:"mime_type,omitempty"`
	Mtime            *time.Time     `json:"mtime,omitempty"`
	Path             *string        `json:"path,omitempty"`
	Permissions      *string        `json:"permissions,omitempty"`
	Preview          *PreviewEntity `json:"preview,omitempty"`
	PreviewID        *int32         `json:"preview_id,omitempty"`
	PriorityColor    *string        `json:"priority_color,omitempty"`
	ProvidedMtime    *time.Time     `json:"provided_mtime,omitempty"`
	Region           *string        `json:"region,omitempty"`
	Size             *int32         `json:"size,omitempty"`
	SubfoldersLocked *bool          `json:"subfolders_locked?,omitempty"`
	Type             *string        `json:"type,omitempty"`
}

package shared

import (
	"time"
)

type FileTypeEnum string

const (
	FileTypeEnumLogo       FileTypeEnum = "LOGO"
	FileTypeEnumBanner     FileTypeEnum = "BANNER"
	FileTypeEnumScreenshot FileTypeEnum = "SCREENSHOT"
)

type File struct {
	ContentType *string       `json:"content_type"`
	CreatedAt   *time.Time    `json:"created_at"`
	ID          *string       `json:"id"`
	Type        *FileTypeEnum `json:"type"`
	UpdatedAt   *time.Time    `json:"updated_at"`
	URL         string        `json:"url"`
}

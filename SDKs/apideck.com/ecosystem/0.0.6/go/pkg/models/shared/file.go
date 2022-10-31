package shared

import (
"time")


type FileTypeEnum string

const (
    FileTypeEnumLogo FileTypeEnum = "LOGO"
FileTypeEnumBanner FileTypeEnum = "BANNER"
FileTypeEnumScreenshot FileTypeEnum = "SCREENSHOT"
)


type File struct {
    ContentType *string `json:"content_type,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    ID *string `json:"id,omitempty"`
    Type *FileTypeEnum `json:"type,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    URL string `json:"url"`
    
}


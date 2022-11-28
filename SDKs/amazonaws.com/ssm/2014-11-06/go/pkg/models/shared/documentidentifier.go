package shared

import (
	"time"
)

// DocumentIdentifier
// Describes the name of a SSM document.
type DocumentIdentifier struct {
	Author          *string             `json:"Author,omitempty"`
	CreatedDate     *time.Time          `json:"CreatedDate,omitempty"`
	DisplayName     *string             `json:"DisplayName,omitempty"`
	DocumentFormat  *DocumentFormatEnum `json:"DocumentFormat,omitempty"`
	DocumentType    *DocumentTypeEnum   `json:"DocumentType,omitempty"`
	DocumentVersion *string             `json:"DocumentVersion,omitempty"`
	Name            *string             `json:"Name,omitempty"`
	Owner           *string             `json:"Owner,omitempty"`
	PlatformTypes   []PlatformTypeEnum  `json:"PlatformTypes,omitempty"`
	Requires        []DocumentRequires  `json:"Requires,omitempty"`
	ReviewStatus    *ReviewStatusEnum   `json:"ReviewStatus,omitempty"`
	SchemaVersion   *string             `json:"SchemaVersion,omitempty"`
	Tags            []Tag               `json:"Tags,omitempty"`
	TargetType      *string             `json:"TargetType,omitempty"`
	VersionName     *string             `json:"VersionName,omitempty"`
}

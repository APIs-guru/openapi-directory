package shared

import (
	"time"
)

type DocumentIdentifier struct {
	Author          *string             `json:"Author"`
	CreatedDate     *time.Time          `json:"CreatedDate"`
	DisplayName     *string             `json:"DisplayName"`
	DocumentFormat  *DocumentFormatEnum `json:"DocumentFormat"`
	DocumentType    *DocumentTypeEnum   `json:"DocumentType"`
	DocumentVersion *string             `json:"DocumentVersion"`
	Name            *string             `json:"Name"`
	Owner           *string             `json:"Owner"`
	PlatformTypes   []PlatformTypeEnum  `json:"PlatformTypes"`
	Requires        []DocumentRequires  `json:"Requires"`
	ReviewStatus    *ReviewStatusEnum   `json:"ReviewStatus"`
	SchemaVersion   *string             `json:"SchemaVersion"`
	Tags            []Tag               `json:"Tags"`
	TargetType      *string             `json:"TargetType"`
	VersionName     *string             `json:"VersionName"`
}

package shared

import (
	"time"
)

type DocumentDescription struct {
	ApprovedVersion        *string                 `json:"ApprovedVersion"`
	AttachmentsInformation []AttachmentInformation `json:"AttachmentsInformation"`
	Author                 *string                 `json:"Author"`
	CreatedDate            *time.Time              `json:"CreatedDate"`
	DefaultVersion         *string                 `json:"DefaultVersion"`
	Description            *string                 `json:"Description"`
	DisplayName            *string                 `json:"DisplayName"`
	DocumentFormat         *DocumentFormatEnum     `json:"DocumentFormat"`
	DocumentType           *DocumentTypeEnum       `json:"DocumentType"`
	DocumentVersion        *string                 `json:"DocumentVersion"`
	Hash                   *string                 `json:"Hash"`
	HashType               *DocumentHashTypeEnum   `json:"HashType"`
	LatestVersion          *string                 `json:"LatestVersion"`
	Name                   *string                 `json:"Name"`
	Owner                  *string                 `json:"Owner"`
	Parameters             []DocumentParameter     `json:"Parameters"`
	PendingReviewVersion   *string                 `json:"PendingReviewVersion"`
	PlatformTypes          []PlatformTypeEnum      `json:"PlatformTypes"`
	Requires               []DocumentRequires      `json:"Requires"`
	ReviewInformation      []ReviewInformation     `json:"ReviewInformation"`
	ReviewStatus           *ReviewStatusEnum       `json:"ReviewStatus"`
	SchemaVersion          *string                 `json:"SchemaVersion"`
	Sha1                   *string                 `json:"Sha1"`
	Status                 *DocumentStatusEnum     `json:"Status"`
	StatusInformation      *string                 `json:"StatusInformation"`
	Tags                   []Tag                   `json:"Tags"`
	TargetType             *string                 `json:"TargetType"`
	VersionName            *string                 `json:"VersionName"`
}

package shared

import (
	"time"
)

// DocumentVersionInfo
// Version information about the document.
type DocumentVersionInfo struct {
	CreatedDate       *time.Time          `json:"CreatedDate,omitempty"`
	DisplayName       *string             `json:"DisplayName,omitempty"`
	DocumentFormat    *DocumentFormatEnum `json:"DocumentFormat,omitempty"`
	DocumentVersion   *string             `json:"DocumentVersion,omitempty"`
	IsDefaultVersion  *bool               `json:"IsDefaultVersion,omitempty"`
	Name              *string             `json:"Name,omitempty"`
	ReviewStatus      *ReviewStatusEnum   `json:"ReviewStatus,omitempty"`
	Status            *DocumentStatusEnum `json:"Status,omitempty"`
	StatusInformation *string             `json:"StatusInformation,omitempty"`
	VersionName       *string             `json:"VersionName,omitempty"`
}

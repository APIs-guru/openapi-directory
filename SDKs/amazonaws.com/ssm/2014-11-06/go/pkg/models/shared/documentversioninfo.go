package shared

import (
	"time"
)

type DocumentVersionInfo struct {
	CreatedDate       *time.Time          `json:"CreatedDate"`
	DisplayName       *string             `json:"DisplayName"`
	DocumentFormat    *DocumentFormatEnum `json:"DocumentFormat"`
	DocumentVersion   *string             `json:"DocumentVersion"`
	IsDefaultVersion  *bool               `json:"IsDefaultVersion"`
	Name              *string             `json:"Name"`
	ReviewStatus      *ReviewStatusEnum   `json:"ReviewStatus"`
	Status            *DocumentStatusEnum `json:"Status"`
	StatusInformation *string             `json:"StatusInformation"`
	VersionName       *string             `json:"VersionName"`
}

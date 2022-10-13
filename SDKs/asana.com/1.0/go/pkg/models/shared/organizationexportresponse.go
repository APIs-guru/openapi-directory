package shared

import (
	"time"
)

type OrganizationExportResponseStateEnum string

const (
	OrganizationExportResponseStateEnumPending  OrganizationExportResponseStateEnum = "pending"
	OrganizationExportResponseStateEnumStarted  OrganizationExportResponseStateEnum = "started"
	OrganizationExportResponseStateEnumFinished OrganizationExportResponseStateEnum = "finished"
	OrganizationExportResponseStateEnumError    OrganizationExportResponseStateEnum = "error"
)

type OrganizationExportResponse struct {
	CreatedAt    *time.Time                           `json:"created_at"`
	DownloadURL  *string                              `json:"download_url"`
	Gid          *string                              `json:"gid"`
	Organization *WorkspaceCompact                    `json:"organization"`
	ResourceType *string                              `json:"resource_type"`
	State        *OrganizationExportResponseStateEnum `json:"state"`
}

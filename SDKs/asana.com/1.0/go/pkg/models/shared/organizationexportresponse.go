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
	CreatedAt    *time.Time                           `json:"created_at,omitempty"`
	DownloadURL  *string                              `json:"download_url,omitempty"`
	Gid          *string                              `json:"gid,omitempty"`
	Organization *WorkspaceCompact                    `json:"organization,omitempty"`
	ResourceType *string                              `json:"resource_type,omitempty"`
	State        *OrganizationExportResponseStateEnum `json:"state,omitempty"`
}

package shared

// OrganizationExportRequest
// An *organization_export* request starts a job to export the complete data of the given Organization.
type OrganizationExportRequest struct {
	Organization *string `json:"organization,omitempty"`
}

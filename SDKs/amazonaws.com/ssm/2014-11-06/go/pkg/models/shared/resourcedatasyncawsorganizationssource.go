package shared

type ResourceDataSyncAwsOrganizationsSource struct {
	OrganizationSourceType string                               `json:"OrganizationSourceType"`
	OrganizationalUnits    []ResourceDataSyncOrganizationalUnit `json:"OrganizationalUnits,omitempty"`
}

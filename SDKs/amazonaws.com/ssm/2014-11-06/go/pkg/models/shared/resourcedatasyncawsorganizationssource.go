package shared

// ResourceDataSyncAwsOrganizationsSource
// Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't present, from multiple Amazon Web Services Regions.
type ResourceDataSyncAwsOrganizationsSource struct {
	OrganizationSourceType string                               `json:"OrganizationSourceType"`
	OrganizationalUnits    []ResourceDataSyncOrganizationalUnit `json:"OrganizationalUnits,omitempty"`
}

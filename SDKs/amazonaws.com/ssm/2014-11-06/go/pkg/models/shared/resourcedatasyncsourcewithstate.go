package shared

// ResourceDataSyncSourceWithState
// <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Amazon Web Services Systems Manager Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in Organizations.)</p>
type ResourceDataSyncSourceWithState struct {
	AwsOrganizationsSource  *ResourceDataSyncAwsOrganizationsSource `json:"AwsOrganizationsSource,omitempty"`
	EnableAllOpsDataSources *bool                                   `json:"EnableAllOpsDataSources,omitempty"`
	IncludeFutureRegions    *bool                                   `json:"IncludeFutureRegions,omitempty"`
	SourceRegions           []string                                `json:"SourceRegions,omitempty"`
	SourceType              *string                                 `json:"SourceType,omitempty"`
	State                   *string                                 `json:"State,omitempty"`
}

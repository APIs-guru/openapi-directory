package shared

// ResourceDataSyncSource
// Information about the source of the data included in the resource data sync.
type ResourceDataSyncSource struct {
	AwsOrganizationsSource  *ResourceDataSyncAwsOrganizationsSource `json:"AwsOrganizationsSource,omitempty"`
	EnableAllOpsDataSources *bool                                   `json:"EnableAllOpsDataSources,omitempty"`
	IncludeFutureRegions    *bool                                   `json:"IncludeFutureRegions,omitempty"`
	SourceRegions           []string                                `json:"SourceRegions"`
	SourceType              string                                  `json:"SourceType"`
}

package shared

type ResourceDataSyncSource struct {
	AwsOrganizationsSource  *ResourceDataSyncAwsOrganizationsSource `json:"AwsOrganizationsSource"`
	EnableAllOpsDataSources *bool                                   `json:"EnableAllOpsDataSources"`
	IncludeFutureRegions    *bool                                   `json:"IncludeFutureRegions"`
	SourceRegions           []string                                `json:"SourceRegions"`
	SourceType              string                                  `json:"SourceType"`
}

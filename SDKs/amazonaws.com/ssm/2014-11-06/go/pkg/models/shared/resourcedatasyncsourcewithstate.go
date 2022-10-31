package shared



type ResourceDataSyncSourceWithState struct {
    AwsOrganizationsSource *ResourceDataSyncAwsOrganizationsSource `json:"AwsOrganizationsSource,omitempty"`
    EnableAllOpsDataSources *bool `json:"EnableAllOpsDataSources,omitempty"`
    IncludeFutureRegions *bool `json:"IncludeFutureRegions,omitempty"`
    SourceRegions []string `json:"SourceRegions,omitempty"`
    SourceType *string `json:"SourceType,omitempty"`
    State *string `json:"State,omitempty"`
    
}


package shared



type GoogleCloudApigeeV1ListEnvironmentGroupsResponse struct {
    EnvironmentGroups []GoogleCloudApigeeV1EnvironmentGroup `json:"environmentGroups,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}


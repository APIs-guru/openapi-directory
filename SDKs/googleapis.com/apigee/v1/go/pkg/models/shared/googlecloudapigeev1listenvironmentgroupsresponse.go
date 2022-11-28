package shared

// GoogleCloudApigeeV1ListEnvironmentGroupsResponse
// Response for ListEnvironmentGroups.
type GoogleCloudApigeeV1ListEnvironmentGroupsResponse struct {
	EnvironmentGroups []GoogleCloudApigeeV1EnvironmentGroup `json:"environmentGroups,omitempty"`
	NextPageToken     *string                               `json:"nextPageToken,omitempty"`
}

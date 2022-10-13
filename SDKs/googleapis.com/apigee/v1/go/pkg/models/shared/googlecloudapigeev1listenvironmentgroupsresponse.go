package shared

type GoogleCloudApigeeV1ListEnvironmentGroupsResponse struct {
	EnvironmentGroups []GoogleCloudApigeeV1EnvironmentGroup `json:"environmentGroups"`
	NextPageToken     *string                               `json:"nextPageToken"`
}

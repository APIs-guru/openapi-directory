package shared

type GoogleCloudApigeeV1ListDebugSessionsResponse struct {
	NextPageToken *string                      `json:"nextPageToken"`
	Sessions      []GoogleCloudApigeeV1Session `json:"sessions"`
}

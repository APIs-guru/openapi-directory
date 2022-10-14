package shared

type GoogleCloudApigeeV1ListDebugSessionsResponse struct {
	NextPageToken *string                      `json:"nextPageToken,omitempty"`
	Sessions      []GoogleCloudApigeeV1Session `json:"sessions,omitempty"`
}

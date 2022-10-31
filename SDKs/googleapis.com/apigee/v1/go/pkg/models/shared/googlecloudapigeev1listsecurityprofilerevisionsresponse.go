package shared

type GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse struct {
	NextPageToken    *string                              `json:"nextPageToken,omitempty"`
	SecurityProfiles []GoogleCloudApigeeV1SecurityProfile `json:"securityProfiles,omitempty"`
}

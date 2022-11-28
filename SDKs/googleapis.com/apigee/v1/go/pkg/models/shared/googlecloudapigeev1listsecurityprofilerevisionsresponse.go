package shared

// GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse
// Response for ListSecurityProfileRevisions.
type GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse struct {
	NextPageToken    *string                              `json:"nextPageToken,omitempty"`
	SecurityProfiles []GoogleCloudApigeeV1SecurityProfile `json:"securityProfiles,omitempty"`
}

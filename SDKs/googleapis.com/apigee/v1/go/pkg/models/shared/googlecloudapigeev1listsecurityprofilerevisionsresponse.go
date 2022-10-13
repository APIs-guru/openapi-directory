package shared

type GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse struct {
	NextPageToken    *string                              `json:"nextPageToken"`
	SecurityProfiles []GoogleCloudApigeeV1SecurityProfile `json:"securityProfiles"`
}

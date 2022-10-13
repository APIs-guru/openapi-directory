package shared

type GoogleCloudApigeeV1ListSecurityProfilesResponse struct {
	NextPageToken    *string                              `json:"nextPageToken"`
	SecurityProfiles []GoogleCloudApigeeV1SecurityProfile `json:"securityProfiles"`
}

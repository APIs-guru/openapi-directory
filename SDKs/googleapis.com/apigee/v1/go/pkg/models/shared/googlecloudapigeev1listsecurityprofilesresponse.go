package shared

// GoogleCloudApigeeV1ListSecurityProfilesResponse
// Response for ListSecurityProfiles.
type GoogleCloudApigeeV1ListSecurityProfilesResponse struct {
	NextPageToken    *string                              `json:"nextPageToken,omitempty"`
	SecurityProfiles []GoogleCloudApigeeV1SecurityProfile `json:"securityProfiles,omitempty"`
}

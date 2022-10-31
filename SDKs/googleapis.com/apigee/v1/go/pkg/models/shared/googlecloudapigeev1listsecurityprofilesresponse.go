package shared



type GoogleCloudApigeeV1ListSecurityProfilesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    SecurityProfiles []GoogleCloudApigeeV1SecurityProfile `json:"securityProfiles,omitempty"`
    
}


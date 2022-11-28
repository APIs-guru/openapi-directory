package shared

// GoogleCloudApigeeV1ListSecurityReportsResponse
// The response for SecurityReports.
type GoogleCloudApigeeV1ListSecurityReportsResponse struct {
	NextPageToken   *string                             `json:"nextPageToken,omitempty"`
	SecurityReports []GoogleCloudApigeeV1SecurityReport `json:"securityReports,omitempty"`
}

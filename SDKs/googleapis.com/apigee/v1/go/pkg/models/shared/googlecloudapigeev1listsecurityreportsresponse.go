package shared

type GoogleCloudApigeeV1ListSecurityReportsResponse struct {
	NextPageToken   *string                             `json:"nextPageToken"`
	SecurityReports []GoogleCloudApigeeV1SecurityReport `json:"securityReports"`
}

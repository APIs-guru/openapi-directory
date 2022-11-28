package shared

// GoogleCloudAssuredworkloadsV1ListViolationsResponse
// Response of ListViolations endpoint.
type GoogleCloudAssuredworkloadsV1ListViolationsResponse struct {
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
	Violations    []GoogleCloudAssuredworkloadsV1Violation `json:"violations,omitempty"`
}

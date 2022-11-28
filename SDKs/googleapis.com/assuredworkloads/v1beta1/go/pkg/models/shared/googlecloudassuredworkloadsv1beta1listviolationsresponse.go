package shared

// GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse
// Response of ListViolations endpoint.
type GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse struct {
	NextPageToken *string                                       `json:"nextPageToken,omitempty"`
	Violations    []GoogleCloudAssuredworkloadsV1beta1Violation `json:"violations,omitempty"`
}

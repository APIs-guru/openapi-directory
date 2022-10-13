package shared

type GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse struct {
	NextPageToken *string                                       `json:"nextPageToken"`
	Violations    []GoogleCloudAssuredworkloadsV1beta1Violation `json:"violations"`
}

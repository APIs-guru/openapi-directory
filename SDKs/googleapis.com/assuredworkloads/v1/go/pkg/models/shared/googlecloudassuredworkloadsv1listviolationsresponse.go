package shared

type GoogleCloudAssuredworkloadsV1ListViolationsResponse struct {
	NextPageToken *string                                  `json:"nextPageToken"`
	Violations    []GoogleCloudAssuredworkloadsV1Violation `json:"violations"`
}

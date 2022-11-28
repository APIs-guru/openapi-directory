package shared

// ListApplicationsResponse
// <p/>
type ListApplicationsResponse struct {
	ApplicationSummaries []ApplicationSummary `json:"ApplicationSummaries"`
	HasMoreApplications  bool                 `json:"HasMoreApplications"`
}

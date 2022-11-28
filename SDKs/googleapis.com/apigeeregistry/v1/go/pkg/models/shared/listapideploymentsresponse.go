package shared

// ListAPIDeploymentsResponse
// Response message for ListApiDeployments.
type ListAPIDeploymentsResponse struct {
	APIDeployments []APIDeployment `json:"apiDeployments,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}

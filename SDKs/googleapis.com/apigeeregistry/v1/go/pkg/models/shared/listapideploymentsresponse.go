package shared

type ListAPIDeploymentsResponse struct {
	APIDeployments []APIDeployment `json:"apiDeployments,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}

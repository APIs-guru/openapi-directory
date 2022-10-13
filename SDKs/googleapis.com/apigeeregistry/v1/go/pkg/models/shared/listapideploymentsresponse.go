package shared

type ListAPIDeploymentsResponse struct {
	APIDeployments []APIDeployment `json:"apiDeployments"`
	NextPageToken  *string         `json:"nextPageToken"`
}

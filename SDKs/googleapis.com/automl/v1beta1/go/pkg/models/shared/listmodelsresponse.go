package shared

type ListModelsResponse struct {
	Model         []Model `json:"model,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}

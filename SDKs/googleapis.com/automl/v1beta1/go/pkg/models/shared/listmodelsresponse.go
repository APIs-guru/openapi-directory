package shared

// ListModelsResponse
// Response message for AutoMl.ListModels.
type ListModelsResponse struct {
	Model         []Model `json:"model,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}

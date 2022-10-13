package shared

type ListModelsResponse struct {
	Model         []Model `json:"model"`
	NextPageToken *string `json:"nextPageToken"`
}

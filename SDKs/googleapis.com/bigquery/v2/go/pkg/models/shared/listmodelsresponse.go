package shared

type ListModelsResponse struct {
	Models        []Model `json:"models"`
	NextPageToken *string `json:"nextPageToken"`
}

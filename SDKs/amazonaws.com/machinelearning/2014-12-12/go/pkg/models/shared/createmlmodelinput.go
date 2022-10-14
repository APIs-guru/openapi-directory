package shared

type CreateMlModelInput struct {
	MlModelID            string            `json:"MLModelId"`
	MlModelName          *string           `json:"MLModelName,omitempty"`
	MlModelType          MlModelTypeEnum   `json:"MLModelType"`
	Parameters           map[string]string `json:"Parameters,omitempty"`
	Recipe               *string           `json:"Recipe,omitempty"`
	RecipeURI            *string           `json:"RecipeUri,omitempty"`
	TrainingDataSourceID string            `json:"TrainingDataSourceId"`
}

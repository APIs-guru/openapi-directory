package shared

type CreateMlModelInput struct {
	MlModelID            string            `json:"MLModelId"`
	MlModelName          *string           `json:"MLModelName"`
	MlModelType          MlModelTypeEnum   `json:"MLModelType"`
	Parameters           map[string]string `json:"Parameters"`
	Recipe               *string           `json:"Recipe"`
	RecipeURI            *string           `json:"RecipeUri"`
	TrainingDataSourceID string            `json:"TrainingDataSourceId"`
}

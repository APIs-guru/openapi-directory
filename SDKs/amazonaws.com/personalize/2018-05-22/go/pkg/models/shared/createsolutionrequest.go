package shared

type CreateSolutionRequest struct {
	DatasetGroupArn string          `json:"datasetGroupArn"`
	EventType       *string         `json:"eventType"`
	Name            string          `json:"name"`
	PerformAutoMl   *bool           `json:"performAutoML"`
	PerformHpo      *bool           `json:"performHPO"`
	RecipeArn       *string         `json:"recipeArn"`
	SolutionConfig  *SolutionConfig `json:"solutionConfig"`
}

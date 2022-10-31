package shared



type CreateSolutionRequest struct {
    DatasetGroupArn string `json:"datasetGroupArn"`
    EventType *string `json:"eventType,omitempty"`
    Name string `json:"name"`
    PerformAutoMl *bool `json:"performAutoML,omitempty"`
    PerformHpo *bool `json:"performHPO,omitempty"`
    RecipeArn *string `json:"recipeArn,omitempty"`
    SolutionConfig *SolutionConfig `json:"solutionConfig,omitempty"`
    
}


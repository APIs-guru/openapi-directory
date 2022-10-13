package shared

type CreateSolutionVersionRequest struct {
	SolutionArn  string            `json:"solutionArn"`
	TrainingMode *TrainingModeEnum `json:"trainingMode"`
}

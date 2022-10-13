package shared

type CreateAutoMlJobRequest struct {
	AutoMlJobConfig                  *AutoMlJobConfig       `json:"AutoMLJobConfig"`
	AutoMlJobName                    string                 `json:"AutoMLJobName"`
	AutoMlJobObjective               *AutoMlJobObjective    `json:"AutoMLJobObjective"`
	GenerateCandidateDefinitionsOnly *bool                  `json:"GenerateCandidateDefinitionsOnly"`
	InputDataConfig                  []AutoMlChannel        `json:"InputDataConfig"`
	ModelDeployConfig                *ModelDeployConfig     `json:"ModelDeployConfig"`
	OutputDataConfig                 AutoMlOutputDataConfig `json:"OutputDataConfig"`
	ProblemType                      *ProblemTypeEnum       `json:"ProblemType"`
	RoleArn                          string                 `json:"RoleArn"`
	Tags                             []Tag                  `json:"Tags"`
}

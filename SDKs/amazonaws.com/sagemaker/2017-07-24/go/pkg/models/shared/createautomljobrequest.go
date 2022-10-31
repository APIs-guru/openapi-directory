package shared



type CreateAutoMlJobRequest struct {
    AutoMlJobConfig *AutoMlJobConfig `json:"AutoMLJobConfig,omitempty"`
    AutoMlJobName string `json:"AutoMLJobName"`
    AutoMlJobObjective *AutoMlJobObjective `json:"AutoMLJobObjective,omitempty"`
    GenerateCandidateDefinitionsOnly *bool `json:"GenerateCandidateDefinitionsOnly,omitempty"`
    InputDataConfig []AutoMlChannel `json:"InputDataConfig"`
    ModelDeployConfig *ModelDeployConfig `json:"ModelDeployConfig,omitempty"`
    OutputDataConfig AutoMlOutputDataConfig `json:"OutputDataConfig"`
    ProblemType *ProblemTypeEnum `json:"ProblemType,omitempty"`
    RoleArn string `json:"RoleArn"`
    Tags []Tag `json:"Tags,omitempty"`
    
}


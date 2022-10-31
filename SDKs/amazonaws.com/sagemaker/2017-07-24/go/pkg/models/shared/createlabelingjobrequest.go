package shared



type CreateLabelingJobRequest struct {
    HumanTaskConfig HumanTaskConfig `json:"HumanTaskConfig"`
    InputConfig LabelingJobInputConfig `json:"InputConfig"`
    LabelAttributeName string `json:"LabelAttributeName"`
    LabelCategoryConfigS3URI *string `json:"LabelCategoryConfigS3Uri,omitempty"`
    LabelingJobAlgorithmsConfig *LabelingJobAlgorithmsConfig `json:"LabelingJobAlgorithmsConfig,omitempty"`
    LabelingJobName string `json:"LabelingJobName"`
    OutputConfig LabelingJobOutputConfig `json:"OutputConfig"`
    RoleArn string `json:"RoleArn"`
    StoppingConditions *LabelingJobStoppingConditions `json:"StoppingConditions,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}


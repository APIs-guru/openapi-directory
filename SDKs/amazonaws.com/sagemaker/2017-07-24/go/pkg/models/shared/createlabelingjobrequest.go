package shared

type CreateLabelingJobRequest struct {
	HumanTaskConfig             HumanTaskConfig                `json:"HumanTaskConfig"`
	InputConfig                 LabelingJobInputConfig         `json:"InputConfig"`
	LabelAttributeName          string                         `json:"LabelAttributeName"`
	LabelCategoryConfigS3URI    *string                        `json:"LabelCategoryConfigS3Uri"`
	LabelingJobAlgorithmsConfig *LabelingJobAlgorithmsConfig   `json:"LabelingJobAlgorithmsConfig"`
	LabelingJobName             string                         `json:"LabelingJobName"`
	OutputConfig                LabelingJobOutputConfig        `json:"OutputConfig"`
	RoleArn                     string                         `json:"RoleArn"`
	StoppingConditions          *LabelingJobStoppingConditions `json:"StoppingConditions"`
	Tags                        []Tag                          `json:"Tags"`
}

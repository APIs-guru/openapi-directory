package shared

import (
	"time"
)

type DescribeLabelingJobResponse struct {
	CreationTime                time.Time                      `json:"CreationTime"`
	FailureReason               *string                        `json:"FailureReason"`
	HumanTaskConfig             HumanTaskConfig                `json:"HumanTaskConfig"`
	InputConfig                 LabelingJobInputConfig         `json:"InputConfig"`
	JobReferenceCode            string                         `json:"JobReferenceCode"`
	LabelAttributeName          *string                        `json:"LabelAttributeName"`
	LabelCategoryConfigS3URI    *string                        `json:"LabelCategoryConfigS3Uri"`
	LabelCounters               LabelCounters                  `json:"LabelCounters"`
	LabelingJobAlgorithmsConfig *LabelingJobAlgorithmsConfig   `json:"LabelingJobAlgorithmsConfig"`
	LabelingJobArn              string                         `json:"LabelingJobArn"`
	LabelingJobName             string                         `json:"LabelingJobName"`
	LabelingJobOutput           *LabelingJobOutput             `json:"LabelingJobOutput"`
	LabelingJobStatus           LabelingJobStatusEnum          `json:"LabelingJobStatus"`
	LastModifiedTime            time.Time                      `json:"LastModifiedTime"`
	OutputConfig                LabelingJobOutputConfig        `json:"OutputConfig"`
	RoleArn                     string                         `json:"RoleArn"`
	StoppingConditions          *LabelingJobStoppingConditions `json:"StoppingConditions"`
	Tags                        []Tag                          `json:"Tags"`
}

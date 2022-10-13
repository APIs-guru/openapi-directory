package shared

import (
	"time"
)

type JobSummary struct {
	BucketCriteria     *S3BucketCriteriaForJob    `json:"bucketCriteria"`
	BucketDefinitions  []S3BucketDefinitionForJob `json:"bucketDefinitions"`
	CreatedAt          *time.Time                 `json:"createdAt"`
	JobID              *string                    `json:"jobId"`
	JobStatus          *JobStatusEnum             `json:"jobStatus"`
	JobType            *JobTypeEnum               `json:"jobType"`
	LastRunErrorStatus *LastRunErrorStatus        `json:"lastRunErrorStatus"`
	Name               *string                    `json:"name"`
	UserPausedDetails  *UserPausedDetails         `json:"userPausedDetails"`
}

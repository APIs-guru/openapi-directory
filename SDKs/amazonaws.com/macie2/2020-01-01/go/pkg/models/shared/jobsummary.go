package shared

import (
	"time"
)

// JobSummary
// Provides information about a classification job, including the current status of the job.
type JobSummary struct {
	BucketCriteria     *S3BucketCriteriaForJob    `json:"bucketCriteria,omitempty"`
	BucketDefinitions  []S3BucketDefinitionForJob `json:"bucketDefinitions,omitempty"`
	CreatedAt          *time.Time                 `json:"createdAt,omitempty"`
	JobID              *string                    `json:"jobId,omitempty"`
	JobStatus          *JobStatusEnum             `json:"jobStatus,omitempty"`
	JobType            *JobTypeEnum               `json:"jobType,omitempty"`
	LastRunErrorStatus *LastRunErrorStatus        `json:"lastRunErrorStatus,omitempty"`
	Name               *string                    `json:"name,omitempty"`
	UserPausedDetails  *UserPausedDetails         `json:"userPausedDetails,omitempty"`
}

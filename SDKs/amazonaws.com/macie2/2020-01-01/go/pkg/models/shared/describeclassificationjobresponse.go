package shared

import (
	"time"
)

type DescribeClassificationJobResponse struct {
	ClientToken                   *string                            `json:"clientToken"`
	CreatedAt                     *time.Time                         `json:"createdAt"`
	CustomDataIdentifierIds       []string                           `json:"customDataIdentifierIds"`
	Description                   *string                            `json:"description"`
	InitialRun                    *bool                              `json:"initialRun"`
	JobArn                        *string                            `json:"jobArn"`
	JobID                         *string                            `json:"jobId"`
	JobStatus                     *JobStatusEnum                     `json:"jobStatus"`
	JobType                       *JobTypeEnum                       `json:"jobType"`
	LastRunErrorStatus            *LastRunErrorStatus                `json:"lastRunErrorStatus"`
	LastRunTime                   *time.Time                         `json:"lastRunTime"`
	ManagedDataIdentifierIds      []string                           `json:"managedDataIdentifierIds"`
	ManagedDataIdentifierSelector *ManagedDataIdentifierSelectorEnum `json:"managedDataIdentifierSelector"`
	Name                          *string                            `json:"name"`
	S3JobDefinition               *S3JobDefinition                   `json:"s3JobDefinition"`
	SamplingPercentage            *int64                             `json:"samplingPercentage"`
	ScheduleFrequency             *JobScheduleFrequency              `json:"scheduleFrequency"`
	Statistics                    *Statistics                        `json:"statistics"`
	Tags                          map[string]string                  `json:"tags"`
	UserPausedDetails             *UserPausedDetails                 `json:"userPausedDetails"`
}

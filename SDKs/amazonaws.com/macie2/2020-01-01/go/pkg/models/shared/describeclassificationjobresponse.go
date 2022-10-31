package shared

import (
"time")

type DescribeClassificationJobResponse struct {
    ClientToken *string `json:"clientToken,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CustomDataIdentifierIds []string `json:"customDataIdentifierIds,omitempty"`
    Description *string `json:"description,omitempty"`
    InitialRun *bool `json:"initialRun,omitempty"`
    JobArn *string `json:"jobArn,omitempty"`
    JobID *string `json:"jobId,omitempty"`
    JobStatus *JobStatusEnum `json:"jobStatus,omitempty"`
    JobType *JobTypeEnum `json:"jobType,omitempty"`
    LastRunErrorStatus *LastRunErrorStatus `json:"lastRunErrorStatus,omitempty"`
    LastRunTime *time.Time `json:"lastRunTime,omitempty"`
    ManagedDataIdentifierIds []string `json:"managedDataIdentifierIds,omitempty"`
    ManagedDataIdentifierSelector *ManagedDataIdentifierSelectorEnum `json:"managedDataIdentifierSelector,omitempty"`
    Name *string `json:"name,omitempty"`
    S3JobDefinition *S3JobDefinition `json:"s3JobDefinition,omitempty"`
    SamplingPercentage *int64 `json:"samplingPercentage,omitempty"`
    ScheduleFrequency *JobScheduleFrequency `json:"scheduleFrequency,omitempty"`
    Statistics *Statistics `json:"statistics,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    UserPausedDetails *UserPausedDetails `json:"userPausedDetails,omitempty"`
    
}


package operations

import (
	"openapi/pkg/models/shared"
)

type CreateClassificationJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateClassificationJobRequestBodyJobTypeEnum string

const (
	CreateClassificationJobRequestBodyJobTypeEnumOneTime   CreateClassificationJobRequestBodyJobTypeEnum = "ONE_TIME"
	CreateClassificationJobRequestBodyJobTypeEnumScheduled CreateClassificationJobRequestBodyJobTypeEnum = "SCHEDULED"
)

type CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum string

const (
	CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnumAll     CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum = "ALL"
	CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnumExclude CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum = "EXCLUDE"
	CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnumInclude CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum = "INCLUDE"
	CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnumNone    CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum = "NONE"
)

// CreateClassificationJobRequestBodyS3JobDefinition
// Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
type CreateClassificationJobRequestBodyS3JobDefinition struct {
	BucketCriteria    *shared.S3BucketCriteriaForJob    `json:"bucketCriteria,omitempty"`
	BucketDefinitions []shared.S3BucketDefinitionForJob `json:"bucketDefinitions,omitempty"`
	Scoping           *shared.Scoping                   `json:"scoping,omitempty"`
}

// CreateClassificationJobRequestBodyScheduleFrequency
// Specifies the recurrence pattern for running a classification job.
type CreateClassificationJobRequestBodyScheduleFrequency struct {
	DailySchedule   map[string]interface{}  `json:"dailySchedule,omitempty"`
	MonthlySchedule *shared.MonthlySchedule `json:"monthlySchedule,omitempty"`
	WeeklySchedule  *shared.WeeklySchedule  `json:"weeklySchedule,omitempty"`
}

type CreateClassificationJobRequestBody struct {
	ClientToken                   string                                                               `json:"clientToken"`
	CustomDataIdentifierIds       []string                                                             `json:"customDataIdentifierIds,omitempty"`
	Description                   *string                                                              `json:"description,omitempty"`
	InitialRun                    *bool                                                                `json:"initialRun,omitempty"`
	JobType                       CreateClassificationJobRequestBodyJobTypeEnum                        `json:"jobType"`
	ManagedDataIdentifierIds      []string                                                             `json:"managedDataIdentifierIds,omitempty"`
	ManagedDataIdentifierSelector *CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum `json:"managedDataIdentifierSelector,omitempty"`
	Name                          string                                                               `json:"name"`
	S3JobDefinition               CreateClassificationJobRequestBodyS3JobDefinition                    `json:"s3JobDefinition"`
	SamplingPercentage            *int64                                                               `json:"samplingPercentage,omitempty"`
	ScheduleFrequency             *CreateClassificationJobRequestBodyScheduleFrequency                 `json:"scheduleFrequency,omitempty"`
	Tags                          map[string]string                                                    `json:"tags,omitempty"`
}

type CreateClassificationJobRequest struct {
	Headers CreateClassificationJobHeaders
	Request CreateClassificationJobRequestBody `request:"mediaType=application/json"`
}

type CreateClassificationJobResponse struct {
	AccessDeniedException           *interface{}
	ConflictException               *interface{}
	ContentType                     string
	CreateClassificationJobResponse *shared.CreateClassificationJobResponse
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	ServiceQuotaExceededException   *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}

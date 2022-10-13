package operations

import (
	"openapi/pkg/models/shared"
)

type CreateClassificationJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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

type CreateClassificationJobRequestBodyS3JobDefinition struct {
	BucketCriteria    *shared.S3BucketCriteriaForJob    `json:"bucketCriteria"`
	BucketDefinitions []shared.S3BucketDefinitionForJob `json:"bucketDefinitions"`
	Scoping           *shared.Scoping                   `json:"scoping"`
}

type CreateClassificationJobRequestBodyScheduleFrequency struct {
	DailySchedule   map[string]interface{}  `json:"dailySchedule"`
	MonthlySchedule *shared.MonthlySchedule `json:"monthlySchedule"`
	WeeklySchedule  *shared.WeeklySchedule  `json:"weeklySchedule"`
}

type CreateClassificationJobRequestBody struct {
	ClientToken                   string                                                               `json:"clientToken"`
	CustomDataIdentifierIds       []string                                                             `json:"customDataIdentifierIds"`
	Description                   *string                                                              `json:"description"`
	InitialRun                    *bool                                                                `json:"initialRun"`
	JobType                       CreateClassificationJobRequestBodyJobTypeEnum                        `json:"jobType"`
	ManagedDataIdentifierIds      []string                                                             `json:"managedDataIdentifierIds"`
	ManagedDataIdentifierSelector *CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum `json:"managedDataIdentifierSelector"`
	Name                          string                                                               `json:"name"`
	S3JobDefinition               CreateClassificationJobRequestBodyS3JobDefinition                    `json:"s3JobDefinition"`
	SamplingPercentage            *int64                                                               `json:"samplingPercentage"`
	ScheduleFrequency             *CreateClassificationJobRequestBodyScheduleFrequency                 `json:"scheduleFrequency"`
	Tags                          map[string]string                                                    `json:"tags"`
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

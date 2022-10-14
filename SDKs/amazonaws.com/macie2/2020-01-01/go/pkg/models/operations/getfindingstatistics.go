package operations

import (
	"openapi/pkg/models/shared"
)

type GetFindingStatisticsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFindingStatisticsRequestBodyFindingCriteria struct {
	Criterion map[string]shared.CriterionAdditionalProperties `json:"criterion,omitempty"`
}

type GetFindingStatisticsRequestBodyGroupByEnum string

const (
	GetFindingStatisticsRequestBodyGroupByEnumResourcesAffectedS3BucketName GetFindingStatisticsRequestBodyGroupByEnum = "resourcesAffected.s3Bucket.name"
	GetFindingStatisticsRequestBodyGroupByEnumType                          GetFindingStatisticsRequestBodyGroupByEnum = "type"
	GetFindingStatisticsRequestBodyGroupByEnumClassificationDetailsJobID    GetFindingStatisticsRequestBodyGroupByEnum = "classificationDetails.jobId"
	GetFindingStatisticsRequestBodyGroupByEnumSeverityDescription           GetFindingStatisticsRequestBodyGroupByEnum = "severity.description"
)

type GetFindingStatisticsRequestBodySortCriteria struct {
	AttributeName *shared.FindingStatisticsSortAttributeNameEnum `json:"attributeName,omitempty"`
	OrderBy       *shared.OrderByEnum                            `json:"orderBy,omitempty"`
}

type GetFindingStatisticsRequestBody struct {
	FindingCriteria *GetFindingStatisticsRequestBodyFindingCriteria `json:"findingCriteria,omitempty"`
	GroupBy         GetFindingStatisticsRequestBodyGroupByEnum      `json:"groupBy"`
	Size            *int64                                          `json:"size,omitempty"`
	SortCriteria    *GetFindingStatisticsRequestBodySortCriteria    `json:"sortCriteria,omitempty"`
}

type GetFindingStatisticsRequest struct {
	Headers GetFindingStatisticsHeaders
	Request GetFindingStatisticsRequestBody `request:"mediaType=application/json"`
}

type GetFindingStatisticsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	GetFindingStatisticsResponse  *shared.GetFindingStatisticsResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

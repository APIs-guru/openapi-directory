package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTraceSummariesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetTraceSummariesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTraceSummariesRequestBodySamplingStrategy struct {
	Name  *shared.SamplingStrategyNameEnum `json:"Name"`
	Value *float64                         `json:"Value"`
}

type GetTraceSummariesRequestBodyTimeRangeTypeEnum string

const (
	GetTraceSummariesRequestBodyTimeRangeTypeEnumTraceID GetTraceSummariesRequestBodyTimeRangeTypeEnum = "TraceId"
	GetTraceSummariesRequestBodyTimeRangeTypeEnumEvent   GetTraceSummariesRequestBodyTimeRangeTypeEnum = "Event"
)

type GetTraceSummariesRequestBody struct {
	EndTime          time.Time                                      `json:"EndTime"`
	FilterExpression *string                                        `json:"FilterExpression"`
	NextToken        *string                                        `json:"NextToken"`
	Sampling         *bool                                          `json:"Sampling"`
	SamplingStrategy *GetTraceSummariesRequestBodySamplingStrategy  `json:"SamplingStrategy"`
	StartTime        time.Time                                      `json:"StartTime"`
	TimeRangeType    *GetTraceSummariesRequestBodyTimeRangeTypeEnum `json:"TimeRangeType"`
}

type GetTraceSummariesRequest struct {
	QueryParams GetTraceSummariesQueryParams
	Headers     GetTraceSummariesHeaders
	Request     GetTraceSummariesRequestBody `request:"mediaType=application/json"`
}

type GetTraceSummariesResponse struct {
	ContentType             string
	GetTraceSummariesResult *shared.GetTraceSummariesResult
	InvalidRequestException *interface{}
	StatusCode              int64
	ThrottledException      *interface{}
}

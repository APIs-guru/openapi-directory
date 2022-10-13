package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMetricSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateMetricSetRequestBodyMetricSetFrequencyEnum string

const (
	CreateMetricSetRequestBodyMetricSetFrequencyEnumP1D   CreateMetricSetRequestBodyMetricSetFrequencyEnum = "P1D"
	CreateMetricSetRequestBodyMetricSetFrequencyEnumPt1H  CreateMetricSetRequestBodyMetricSetFrequencyEnum = "PT1H"
	CreateMetricSetRequestBodyMetricSetFrequencyEnumPt10M CreateMetricSetRequestBodyMetricSetFrequencyEnum = "PT10M"
	CreateMetricSetRequestBodyMetricSetFrequencyEnumPt5M  CreateMetricSetRequestBodyMetricSetFrequencyEnum = "PT5M"
)

type CreateMetricSetRequestBodyMetricSource struct {
	AppFlowConfig        *shared.AppFlowConfig        `json:"AppFlowConfig"`
	CloudWatchConfig     *shared.CloudWatchConfig     `json:"CloudWatchConfig"`
	RdsSourceConfig      *shared.RdsSourceConfig      `json:"RDSSourceConfig"`
	RedshiftSourceConfig *shared.RedshiftSourceConfig `json:"RedshiftSourceConfig"`
	S3SourceConfig       *shared.S3SourceConfig       `json:"S3SourceConfig"`
}

type CreateMetricSetRequestBodyTimestampColumn struct {
	ColumnFormat *string `json:"ColumnFormat"`
	ColumnName   *string `json:"ColumnName"`
}

type CreateMetricSetRequestBody struct {
	AnomalyDetectorArn   string                                            `json:"AnomalyDetectorArn"`
	DimensionList        []string                                          `json:"DimensionList"`
	MetricList           []shared.Metric                                   `json:"MetricList"`
	MetricSetDescription *string                                           `json:"MetricSetDescription"`
	MetricSetFrequency   *CreateMetricSetRequestBodyMetricSetFrequencyEnum `json:"MetricSetFrequency"`
	MetricSetName        string                                            `json:"MetricSetName"`
	MetricSource         CreateMetricSetRequestBodyMetricSource            `json:"MetricSource"`
	Offset               *int64                                            `json:"Offset"`
	Tags                 map[string]string                                 `json:"Tags"`
	TimestampColumn      *CreateMetricSetRequestBodyTimestampColumn        `json:"TimestampColumn"`
	Timezone             *string                                           `json:"Timezone"`
}

type CreateMetricSetRequest struct {
	Headers CreateMetricSetHeaders
	Request CreateMetricSetRequestBody `request:"mediaType=application/json"`
}

type CreateMetricSetResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateMetricSetResponse       *shared.CreateMetricSetResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
	ValidationException           *interface{}
}

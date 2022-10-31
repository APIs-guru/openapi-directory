package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMetricSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateMetricSetRequestBodyMetricSetFrequencyEnum string

const (
	CreateMetricSetRequestBodyMetricSetFrequencyEnumP1D   CreateMetricSetRequestBodyMetricSetFrequencyEnum = "P1D"
	CreateMetricSetRequestBodyMetricSetFrequencyEnumPt1H  CreateMetricSetRequestBodyMetricSetFrequencyEnum = "PT1H"
	CreateMetricSetRequestBodyMetricSetFrequencyEnumPt10M CreateMetricSetRequestBodyMetricSetFrequencyEnum = "PT10M"
	CreateMetricSetRequestBodyMetricSetFrequencyEnumPt5M  CreateMetricSetRequestBodyMetricSetFrequencyEnum = "PT5M"
)

type CreateMetricSetRequestBodyMetricSource struct {
	AppFlowConfig        *shared.AppFlowConfig        `json:"AppFlowConfig,omitempty"`
	CloudWatchConfig     *shared.CloudWatchConfig     `json:"CloudWatchConfig,omitempty"`
	RdsSourceConfig      *shared.RdsSourceConfig      `json:"RDSSourceConfig,omitempty"`
	RedshiftSourceConfig *shared.RedshiftSourceConfig `json:"RedshiftSourceConfig,omitempty"`
	S3SourceConfig       *shared.S3SourceConfig       `json:"S3SourceConfig,omitempty"`
}

type CreateMetricSetRequestBodyTimestampColumn struct {
	ColumnFormat *string `json:"ColumnFormat,omitempty"`
	ColumnName   *string `json:"ColumnName,omitempty"`
}

type CreateMetricSetRequestBody struct {
	AnomalyDetectorArn   string                                            `json:"AnomalyDetectorArn"`
	DimensionList        []string                                          `json:"DimensionList,omitempty"`
	MetricList           []shared.Metric                                   `json:"MetricList"`
	MetricSetDescription *string                                           `json:"MetricSetDescription,omitempty"`
	MetricSetFrequency   *CreateMetricSetRequestBodyMetricSetFrequencyEnum `json:"MetricSetFrequency,omitempty"`
	MetricSetName        string                                            `json:"MetricSetName"`
	MetricSource         CreateMetricSetRequestBodyMetricSource            `json:"MetricSource"`
	Offset               *int64                                            `json:"Offset,omitempty"`
	Tags                 map[string]string                                 `json:"Tags,omitempty"`
	TimestampColumn      *CreateMetricSetRequestBodyTimestampColumn        `json:"TimestampColumn,omitempty"`
	Timezone             *string                                           `json:"Timezone,omitempty"`
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

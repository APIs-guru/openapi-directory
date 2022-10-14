package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMetricSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateMetricSetRequestBodyMetricSetFrequencyEnum string

const (
	UpdateMetricSetRequestBodyMetricSetFrequencyEnumP1D   UpdateMetricSetRequestBodyMetricSetFrequencyEnum = "P1D"
	UpdateMetricSetRequestBodyMetricSetFrequencyEnumPt1H  UpdateMetricSetRequestBodyMetricSetFrequencyEnum = "PT1H"
	UpdateMetricSetRequestBodyMetricSetFrequencyEnumPt10M UpdateMetricSetRequestBodyMetricSetFrequencyEnum = "PT10M"
	UpdateMetricSetRequestBodyMetricSetFrequencyEnumPt5M  UpdateMetricSetRequestBodyMetricSetFrequencyEnum = "PT5M"
)

type UpdateMetricSetRequestBodyMetricSource struct {
	AppFlowConfig        *shared.AppFlowConfig        `json:"AppFlowConfig,omitempty"`
	CloudWatchConfig     *shared.CloudWatchConfig     `json:"CloudWatchConfig,omitempty"`
	RdsSourceConfig      *shared.RdsSourceConfig      `json:"RDSSourceConfig,omitempty"`
	RedshiftSourceConfig *shared.RedshiftSourceConfig `json:"RedshiftSourceConfig,omitempty"`
	S3SourceConfig       *shared.S3SourceConfig       `json:"S3SourceConfig,omitempty"`
}

type UpdateMetricSetRequestBodyTimestampColumn struct {
	ColumnFormat *string `json:"ColumnFormat,omitempty"`
	ColumnName   *string `json:"ColumnName,omitempty"`
}

type UpdateMetricSetRequestBody struct {
	DimensionList        []string                                          `json:"DimensionList,omitempty"`
	MetricList           []shared.Metric                                   `json:"MetricList,omitempty"`
	MetricSetArn         string                                            `json:"MetricSetArn"`
	MetricSetDescription *string                                           `json:"MetricSetDescription,omitempty"`
	MetricSetFrequency   *UpdateMetricSetRequestBodyMetricSetFrequencyEnum `json:"MetricSetFrequency,omitempty"`
	MetricSource         *UpdateMetricSetRequestBodyMetricSource           `json:"MetricSource,omitempty"`
	Offset               *int64                                            `json:"Offset,omitempty"`
	TimestampColumn      *UpdateMetricSetRequestBodyTimestampColumn        `json:"TimestampColumn,omitempty"`
}

type UpdateMetricSetRequest struct {
	Headers UpdateMetricSetHeaders
	Request UpdateMetricSetRequestBody `request:"mediaType=application/json"`
}

type UpdateMetricSetResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UpdateMetricSetResponse   *shared.UpdateMetricSetResponse
	ValidationException       *interface{}
}

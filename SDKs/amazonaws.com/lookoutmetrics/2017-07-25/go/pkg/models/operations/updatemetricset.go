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
	AppFlowConfig        *shared.AppFlowConfig        `json:"AppFlowConfig"`
	CloudWatchConfig     *shared.CloudWatchConfig     `json:"CloudWatchConfig"`
	RdsSourceConfig      *shared.RdsSourceConfig      `json:"RDSSourceConfig"`
	RedshiftSourceConfig *shared.RedshiftSourceConfig `json:"RedshiftSourceConfig"`
	S3SourceConfig       *shared.S3SourceConfig       `json:"S3SourceConfig"`
}

type UpdateMetricSetRequestBodyTimestampColumn struct {
	ColumnFormat *string `json:"ColumnFormat"`
	ColumnName   *string `json:"ColumnName"`
}

type UpdateMetricSetRequestBody struct {
	DimensionList        []string                                          `json:"DimensionList"`
	MetricList           []shared.Metric                                   `json:"MetricList"`
	MetricSetArn         string                                            `json:"MetricSetArn"`
	MetricSetDescription *string                                           `json:"MetricSetDescription"`
	MetricSetFrequency   *UpdateMetricSetRequestBodyMetricSetFrequencyEnum `json:"MetricSetFrequency"`
	MetricSource         *UpdateMetricSetRequestBodyMetricSource           `json:"MetricSource"`
	Offset               *int64                                            `json:"Offset"`
	TimestampColumn      *UpdateMetricSetRequestBodyTimestampColumn        `json:"TimestampColumn"`
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

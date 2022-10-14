package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeedbackQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetFeedbackHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback struct {
	AnomalyGroupID *string `json:"AnomalyGroupId,omitempty"`
	TimeSeriesID   *string `json:"TimeSeriesId,omitempty"`
}

type GetFeedbackRequestBody struct {
	AnomalyDetectorArn             string                                               `json:"AnomalyDetectorArn"`
	AnomalyGroupTimeSeriesFeedback GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback `json:"AnomalyGroupTimeSeriesFeedback"`
	MaxResults                     *int64                                               `json:"MaxResults,omitempty"`
	NextToken                      *string                                              `json:"NextToken,omitempty"`
}

type GetFeedbackRequest struct {
	QueryParams GetFeedbackQueryParams
	Headers     GetFeedbackHeaders
	Request     GetFeedbackRequestBody `request:"mediaType=application/json"`
}

type GetFeedbackResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetFeedbackResponse       *shared.GetFeedbackResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	ValidationException       *interface{}
}

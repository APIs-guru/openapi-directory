package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAnomalyDetectionExecutionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeAnomalyDetectionExecutionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeAnomalyDetectionExecutionsRequestBody struct {
	AnomalyDetectorArn string  `json:"AnomalyDetectorArn"`
	MaxResults         *int64  `json:"MaxResults,omitempty"`
	NextToken          *string `json:"NextToken,omitempty"`
	Timestamp          *string `json:"Timestamp,omitempty"`
}

type DescribeAnomalyDetectionExecutionsRequest struct {
	QueryParams DescribeAnomalyDetectionExecutionsQueryParams
	Headers     DescribeAnomalyDetectionExecutionsHeaders
	Request     DescribeAnomalyDetectionExecutionsRequestBody `request:"mediaType=application/json"`
}

type DescribeAnomalyDetectionExecutionsResponse struct {
	AccessDeniedException                      *interface{}
	ContentType                                string
	DescribeAnomalyDetectionExecutionsResponse *shared.DescribeAnomalyDetectionExecutionsResponse
	InternalServerException                    *interface{}
	ResourceNotFoundException                  *interface{}
	StatusCode                                 int64
	TooManyRequestsException                   *interface{}
	ValidationException                        *interface{}
}

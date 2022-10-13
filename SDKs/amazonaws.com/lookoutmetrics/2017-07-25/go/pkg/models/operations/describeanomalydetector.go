package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAnomalyDetectorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAnomalyDetectorRequestBody struct {
	AnomalyDetectorArn string `json:"AnomalyDetectorArn"`
}

type DescribeAnomalyDetectorRequest struct {
	Headers DescribeAnomalyDetectorHeaders
	Request DescribeAnomalyDetectorRequestBody `request:"mediaType=application/json"`
}

type DescribeAnomalyDetectorResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	DescribeAnomalyDetectorResponse *shared.DescribeAnomalyDetectorResponse
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
	ValidationException             *interface{}
}

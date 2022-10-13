package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAlertHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAlertRequestBody struct {
	AlertArn string `json:"AlertArn"`
}

type DescribeAlertRequest struct {
	Headers DescribeAlertHeaders
	Request DescribeAlertRequestBody `request:"mediaType=application/json"`
}

type DescribeAlertResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeAlertResponse     *shared.DescribeAlertResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	ValidationException       *interface{}
}

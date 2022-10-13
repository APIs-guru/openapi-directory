package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServerXAmzTargetEnum string

const (
	DescribeServerXAmzTargetEnumTransferServiceDescribeServer DescribeServerXAmzTargetEnum = "TransferService.DescribeServer"
)

type DescribeServerHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeServerRequest struct {
	Headers DescribeServerHeaders
	Request shared.DescribeServerRequest `request:"mediaType=application/json"`
}

type DescribeServerResponse struct {
	ContentType                 string
	DescribeServerResponse      *shared.DescribeServerResponse
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServerXAmzTargetEnum string

const (
	DescribeServerXAmzTargetEnumTransferServiceDescribeServer DescribeServerXAmzTargetEnum = "TransferService.DescribeServer"
)

type DescribeServerHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAccessXAmzTargetEnum string

const (
	DescribeAccessXAmzTargetEnumTransferServiceDescribeAccess DescribeAccessXAmzTargetEnum = "TransferService.DescribeAccess"
)

type DescribeAccessHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeAccessRequest struct {
	Headers DescribeAccessHeaders
	Request shared.DescribeAccessRequest `request:"mediaType=application/json"`
}

type DescribeAccessResponse struct {
	ContentType                 string
	DescribeAccessResponse      *shared.DescribeAccessResponse
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}

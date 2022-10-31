package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeUserXAmzTargetEnum string

const (
	DescribeUserXAmzTargetEnumTransferServiceDescribeUser DescribeUserXAmzTargetEnum = "TransferService.DescribeUser"
)

type DescribeUserHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeUserRequest struct {
	Headers DescribeUserHeaders
	Request shared.DescribeUserRequest `request:"mediaType=application/json"`
}

type DescribeUserResponse struct {
	ContentType                 string
	DescribeUserResponse        *shared.DescribeUserResponse
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}

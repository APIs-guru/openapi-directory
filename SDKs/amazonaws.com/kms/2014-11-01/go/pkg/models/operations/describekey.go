package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeKeyXAmzTargetEnum string

const (
	DescribeKeyXAmzTargetEnumTrentServiceDescribeKey DescribeKeyXAmzTargetEnum = "TrentService.DescribeKey"
)

type DescribeKeyHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeKeyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeKeyRequest struct {
	Headers DescribeKeyHeaders
	Request shared.DescribeKeyRequest `request:"mediaType=application/json"`
}

type DescribeKeyResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	DescribeKeyResponse        *shared.DescribeKeyResponse
	InvalidArnException        *interface{}
	KmsInternalException       *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}

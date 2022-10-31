package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeKeyXAmzTargetEnum string

const (
	DescribeKeyXAmzTargetEnumTrentServiceDescribeKey DescribeKeyXAmzTargetEnum = "TrentService.DescribeKey"
)

type DescribeKeyHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

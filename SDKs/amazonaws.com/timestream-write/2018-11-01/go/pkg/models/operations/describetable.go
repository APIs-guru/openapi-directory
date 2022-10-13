package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTableXAmzTargetEnum string

const (
	DescribeTableXAmzTargetEnumTimestream20181101DescribeTable DescribeTableXAmzTargetEnum = "Timestream_20181101.DescribeTable"
)

type DescribeTableHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTableRequest struct {
	Headers DescribeTableHeaders
	Request shared.DescribeTableRequest `request:"mediaType=application/json"`
}

type DescribeTableResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeTableResponse     *shared.DescribeTableResponse
	InternalServerException   *interface{}
	InvalidEndpointException  *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

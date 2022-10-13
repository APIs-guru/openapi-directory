package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHandshakeXAmzTargetEnum string

const (
	DescribeHandshakeXAmzTargetEnumAwsOrganizationsV20161128DescribeHandshake DescribeHandshakeXAmzTargetEnum = "AWSOrganizationsV20161128.DescribeHandshake"
)

type DescribeHandshakeHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeHandshakeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeHandshakeRequest struct {
	Headers DescribeHandshakeHeaders
	Request shared.DescribeHandshakeRequest `request:"mediaType=application/json"`
}

type DescribeHandshakeResponse struct {
	AccessDeniedException           *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	DescribeHandshakeResponse       *shared.DescribeHandshakeResponse
	HandshakeNotFoundException      *interface{}
	InvalidInputException           *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAttachmentXAmzTargetEnum string

const (
	DescribeAttachmentXAmzTargetEnumAwsSupport20130415DescribeAttachment DescribeAttachmentXAmzTargetEnum = "AWSSupport_20130415.DescribeAttachment"
)

type DescribeAttachmentHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAttachmentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAttachmentRequest struct {
	Headers DescribeAttachmentHeaders
	Request shared.DescribeAttachmentRequest `request:"mediaType=application/json"`
}

type DescribeAttachmentResponse struct {
	AttachmentIDNotFound            *interface{}
	ContentType                     string
	DescribeAttachmentLimitExceeded *interface{}
	DescribeAttachmentResponse      *shared.DescribeAttachmentResponse
	InternalServerError             *interface{}
	StatusCode                      int64
}

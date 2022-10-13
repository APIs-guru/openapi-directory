package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDocumentXAmzTargetEnum string

const (
	DescribeDocumentXAmzTargetEnumAmazonSsmDescribeDocument DescribeDocumentXAmzTargetEnum = "AmazonSSM.DescribeDocument"
)

type DescribeDocumentHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDocumentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDocumentRequest struct {
	Headers DescribeDocumentHeaders
	Request shared.DescribeDocumentRequest `request:"mediaType=application/json"`
}

type DescribeDocumentResponse struct {
	ContentType            string
	DescribeDocumentResult *shared.DescribeDocumentResult
	InternalServerError    *interface{}
	InvalidDocument        *interface{}
	InvalidDocumentVersion *interface{}
	StatusCode             int64
}

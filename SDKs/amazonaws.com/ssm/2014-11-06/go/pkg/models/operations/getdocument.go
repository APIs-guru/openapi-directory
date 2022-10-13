package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentXAmzTargetEnum string

const (
	GetDocumentXAmzTargetEnumAmazonSsmGetDocument GetDocumentXAmzTargetEnum = "AmazonSSM.GetDocument"
)

type GetDocumentHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDocumentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDocumentRequest struct {
	Headers GetDocumentHeaders
	Request shared.GetDocumentRequest `request:"mediaType=application/json"`
}

type GetDocumentResponse struct {
	ContentType            string
	GetDocumentResult      *shared.GetDocumentResult
	InternalServerError    *interface{}
	InvalidDocument        *interface{}
	InvalidDocumentVersion *interface{}
	StatusCode             int64
}

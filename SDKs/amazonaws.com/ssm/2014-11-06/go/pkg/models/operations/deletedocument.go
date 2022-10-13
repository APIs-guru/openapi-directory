package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDocumentXAmzTargetEnum string

const (
	DeleteDocumentXAmzTargetEnumAmazonSsmDeleteDocument DeleteDocumentXAmzTargetEnum = "AmazonSSM.DeleteDocument"
)

type DeleteDocumentHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDocumentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDocumentRequest struct {
	Headers DeleteDocumentHeaders
	Request shared.DeleteDocumentRequest `request:"mediaType=application/json"`
}

type DeleteDocumentResponse struct {
	AssociatedInstances      *interface{}
	ContentType              string
	DeleteDocumentResult     map[string]interface{}
	InternalServerError      *interface{}
	InvalidDocument          *interface{}
	InvalidDocumentOperation *interface{}
	StatusCode               int64
}

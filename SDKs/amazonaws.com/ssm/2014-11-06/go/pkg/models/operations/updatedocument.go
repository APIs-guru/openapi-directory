package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDocumentXAmzTargetEnum string

const (
	UpdateDocumentXAmzTargetEnumAmazonSsmUpdateDocument UpdateDocumentXAmzTargetEnum = "AmazonSSM.UpdateDocument"
)

type UpdateDocumentHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDocumentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDocumentRequest struct {
	Headers UpdateDocumentHeaders
	Request shared.UpdateDocumentRequest `request:"mediaType=application/json"`
}

type UpdateDocumentResponse struct {
	ContentType                  string
	DocumentVersionLimitExceeded *interface{}
	DuplicateDocumentContent     *interface{}
	DuplicateDocumentVersionName *interface{}
	InternalServerError          *interface{}
	InvalidDocument              *interface{}
	InvalidDocumentContent       *interface{}
	InvalidDocumentOperation     *interface{}
	InvalidDocumentSchemaVersion *interface{}
	InvalidDocumentVersion       *interface{}
	MaxDocumentSizeExceeded      *interface{}
	StatusCode                   int64
	UpdateDocumentResult         *shared.UpdateDocumentResult
}

package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDocumentXAmzTargetEnum string

const (
	CreateDocumentXAmzTargetEnumAmazonSsmCreateDocument CreateDocumentXAmzTargetEnum = "AmazonSSM.CreateDocument"
)

type CreateDocumentHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDocumentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDocumentRequest struct {
	Headers CreateDocumentHeaders
	Request shared.CreateDocumentRequest `request:"mediaType=application/json"`
}

type CreateDocumentResponse struct {
	ContentType                  string
	CreateDocumentResult         *shared.CreateDocumentResult
	DocumentAlreadyExists        *interface{}
	DocumentLimitExceeded        *interface{}
	InternalServerError          *interface{}
	InvalidDocumentContent       *interface{}
	InvalidDocumentSchemaVersion *interface{}
	MaxDocumentSizeExceeded      *interface{}
	StatusCode                   int64
}

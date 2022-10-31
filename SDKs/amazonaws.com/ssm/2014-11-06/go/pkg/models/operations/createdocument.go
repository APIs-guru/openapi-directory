package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDocumentXAmzTargetEnum string

const (
	CreateDocumentXAmzTargetEnumAmazonSsmCreateDocument CreateDocumentXAmzTargetEnum = "AmazonSSM.CreateDocument"
)

type CreateDocumentHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDocumentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

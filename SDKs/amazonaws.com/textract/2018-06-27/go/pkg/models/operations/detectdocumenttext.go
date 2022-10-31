package operations

import (
	"openapi/pkg/models/shared"
)

type DetectDocumentTextXAmzTargetEnum string

const (
	DetectDocumentTextXAmzTargetEnumTextractDetectDocumentText DetectDocumentTextXAmzTargetEnum = "Textract.DetectDocumentText"
)

type DetectDocumentTextHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DetectDocumentTextXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DetectDocumentTextRequest struct {
	Headers DetectDocumentTextHeaders
	Request shared.DetectDocumentTextRequest `request:"mediaType=application/json"`
}

type DetectDocumentTextResponse struct {
	AccessDeniedException                  *interface{}
	BadDocumentException                   *interface{}
	ContentType                            string
	DetectDocumentTextResponse             *shared.DetectDocumentTextResponse
	DocumentTooLargeException              *interface{}
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	UnsupportedDocumentException           *interface{}
}

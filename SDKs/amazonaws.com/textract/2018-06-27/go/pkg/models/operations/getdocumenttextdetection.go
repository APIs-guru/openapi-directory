package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentTextDetectionXAmzTargetEnum string

const (
	GetDocumentTextDetectionXAmzTargetEnumTextractGetDocumentTextDetection GetDocumentTextDetectionXAmzTargetEnum = "Textract.GetDocumentTextDetection"
)

type GetDocumentTextDetectionHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDocumentTextDetectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDocumentTextDetectionRequest struct {
	Headers GetDocumentTextDetectionHeaders
	Request shared.GetDocumentTextDetectionRequest `request:"mediaType=application/json"`
}

type GetDocumentTextDetectionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	GetDocumentTextDetectionResponse       *shared.GetDocumentTextDetectionResponse
	InternalServerError                    *interface{}
	InvalidJobIDException                  *interface{}
	InvalidKmsKeyException                 *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}

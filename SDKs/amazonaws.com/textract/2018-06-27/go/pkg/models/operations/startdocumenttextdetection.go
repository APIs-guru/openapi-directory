package operations

import (
	"openapi/pkg/models/shared"
)

type StartDocumentTextDetectionXAmzTargetEnum string

const (
	StartDocumentTextDetectionXAmzTargetEnumTextractStartDocumentTextDetection StartDocumentTextDetectionXAmzTargetEnum = "Textract.StartDocumentTextDetection"
)

type StartDocumentTextDetectionHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartDocumentTextDetectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartDocumentTextDetectionRequest struct {
	Headers StartDocumentTextDetectionHeaders
	Request shared.StartDocumentTextDetectionRequest `request:"mediaType=application/json"`
}

type StartDocumentTextDetectionResponse struct {
	AccessDeniedException                  *interface{}
	BadDocumentException                   *interface{}
	ContentType                            string
	DocumentTooLargeException              *interface{}
	IdempotentParameterMismatchException   *interface{}
	InternalServerError                    *interface{}
	InvalidKmsKeyException                 *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	StartDocumentTextDetectionResponse     *shared.StartDocumentTextDetectionResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
	UnsupportedDocumentException           *interface{}
}

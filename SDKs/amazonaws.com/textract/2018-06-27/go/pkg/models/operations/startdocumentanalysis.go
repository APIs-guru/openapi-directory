package operations

import (
	"openapi/pkg/models/shared"
)

type StartDocumentAnalysisXAmzTargetEnum string

const (
	StartDocumentAnalysisXAmzTargetEnumTextractStartDocumentAnalysis StartDocumentAnalysisXAmzTargetEnum = "Textract.StartDocumentAnalysis"
)

type StartDocumentAnalysisHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartDocumentAnalysisXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartDocumentAnalysisRequest struct {
	Headers StartDocumentAnalysisHeaders
	Request shared.StartDocumentAnalysisRequest `request:"mediaType=application/json"`
}

type StartDocumentAnalysisResponse struct {
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
	StartDocumentAnalysisResponse          *shared.StartDocumentAnalysisResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
	UnsupportedDocumentException           *interface{}
}

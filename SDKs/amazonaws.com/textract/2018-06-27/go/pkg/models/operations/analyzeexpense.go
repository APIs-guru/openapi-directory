package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyzeExpenseXAmzTargetEnum string

const (
	AnalyzeExpenseXAmzTargetEnumTextractAnalyzeExpense AnalyzeExpenseXAmzTargetEnum = "Textract.AnalyzeExpense"
)

type AnalyzeExpenseHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AnalyzeExpenseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AnalyzeExpenseRequest struct {
	Headers AnalyzeExpenseHeaders
	Request shared.AnalyzeExpenseRequest `request:"mediaType=application/json"`
}

type AnalyzeExpenseResponse struct {
	AccessDeniedException                  *interface{}
	AnalyzeExpenseResponse                 *shared.AnalyzeExpenseResponse
	BadDocumentException                   *interface{}
	ContentType                            string
	DocumentTooLargeException              *interface{}
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	UnsupportedDocumentException           *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type EnableImportFindingsForProductHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type EnableImportFindingsForProductRequestBody struct {
	ProductArn string `json:"ProductArn"`
}

type EnableImportFindingsForProductRequest struct {
	Headers EnableImportFindingsForProductHeaders
	Request EnableImportFindingsForProductRequestBody `request:"mediaType=application/json"`
}

type EnableImportFindingsForProductResponse struct {
	ContentType                            string
	EnableImportFindingsForProductResponse *shared.EnableImportFindingsForProductResponse
	InternalException                      *interface{}
	InvalidAccessException                 *interface{}
	InvalidInputException                  *interface{}
	LimitExceededException                 *interface{}
	ResourceConflictException              *interface{}
	StatusCode                             int64
}

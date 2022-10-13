package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImportPathParams struct {
	ImportID string `pathParam:"style=simple,explode=false,name=importId"`
}

type DeleteImportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteImportRequest struct {
	PathParams DeleteImportPathParams
	Headers    DeleteImportHeaders
}

type DeleteImportResponse struct {
	ContentType                   string
	DeleteImportResponse          *shared.DeleteImportResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

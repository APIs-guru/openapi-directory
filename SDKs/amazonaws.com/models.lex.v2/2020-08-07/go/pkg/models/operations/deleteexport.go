package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteExportPathParams struct {
	ExportID string `pathParam:"style=simple,explode=false,name=exportId"`
}

type DeleteExportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteExportRequest struct {
	PathParams DeleteExportPathParams
	Headers    DeleteExportHeaders
}

type DeleteExportResponse struct {
	ContentType                   string
	DeleteExportResponse          *shared.DeleteExportResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

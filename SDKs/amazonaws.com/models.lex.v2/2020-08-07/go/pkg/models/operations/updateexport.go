package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateExportPathParams struct {
	ExportID string `pathParam:"style=simple,explode=false,name=exportId"`
}

type UpdateExportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateExportRequestBody struct {
	FilePassword *string `json:"filePassword"`
}

type UpdateExportRequest struct {
	PathParams UpdateExportPathParams
	Headers    UpdateExportHeaders
	Request    UpdateExportRequestBody `request:"mediaType=application/json"`
}

type UpdateExportResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateExportResponse          *shared.UpdateExportResponse
	ValidationException           *interface{}
}

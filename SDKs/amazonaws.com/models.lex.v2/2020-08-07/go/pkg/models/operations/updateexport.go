package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateExportPathParams struct {
	ExportID string `pathParam:"style=simple,explode=false,name=exportId"`
}

type UpdateExportHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateExportRequestBody struct {
	FilePassword *string `json:"filePassword,omitempty"`
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

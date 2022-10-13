package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExportPathParams struct {
	ExportID string `pathParam:"style=simple,explode=false,name=exportId"`
}

type DescribeExportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeExportRequest struct {
	PathParams DescribeExportPathParams
	Headers    DescribeExportHeaders
}

type DescribeExportResponse struct {
	ContentType               string
	DescribeExportResponse    *shared.DescribeExportResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

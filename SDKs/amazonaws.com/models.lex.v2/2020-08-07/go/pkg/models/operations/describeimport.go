package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeImportPathParams struct {
	ImportID string `pathParam:"style=simple,explode=false,name=importId"`
}

type DescribeImportHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeImportRequest struct {
	PathParams DescribeImportPathParams
	Headers    DescribeImportHeaders
}

type DescribeImportResponse struct {
	ContentType               string
	DescribeImportResponse    *shared.DescribeImportResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

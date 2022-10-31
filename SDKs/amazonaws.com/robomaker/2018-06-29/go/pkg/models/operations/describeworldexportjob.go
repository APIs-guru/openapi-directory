package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorldExportJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeWorldExportJobRequestBody struct {
	Job string `json:"job"`
}

type DescribeWorldExportJobRequest struct {
	Headers DescribeWorldExportJobHeaders
	Request DescribeWorldExportJobRequestBody `request:"mediaType=application/json"`
}

type DescribeWorldExportJobResponse struct {
	ContentType                    string
	DescribeWorldExportJobResponse *shared.DescribeWorldExportJobResponse
	InternalServerException        *interface{}
	InvalidParameterException      *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}

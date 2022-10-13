package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorldGenerationJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeWorldGenerationJobRequestBody struct {
	Job string `json:"job"`
}

type DescribeWorldGenerationJobRequest struct {
	Headers DescribeWorldGenerationJobHeaders
	Request DescribeWorldGenerationJobRequestBody `request:"mediaType=application/json"`
}

type DescribeWorldGenerationJobResponse struct {
	ContentType                        string
	DescribeWorldGenerationJobResponse *shared.DescribeWorldGenerationJobResponse
	InternalServerException            *interface{}
	InvalidParameterException          *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
}

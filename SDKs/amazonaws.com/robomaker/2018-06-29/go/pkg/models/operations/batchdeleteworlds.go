package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteWorldsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchDeleteWorldsRequestBody struct {
	Worlds []string `json:"worlds"`
}

type BatchDeleteWorldsRequest struct {
	Headers BatchDeleteWorldsHeaders
	Request BatchDeleteWorldsRequestBody `request:"mediaType=application/json"`
}

type BatchDeleteWorldsResponse struct {
	BatchDeleteWorldsResponse *shared.BatchDeleteWorldsResponse
	ContentType               string
	InternalServerException   *interface{}
	InvalidParameterException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}

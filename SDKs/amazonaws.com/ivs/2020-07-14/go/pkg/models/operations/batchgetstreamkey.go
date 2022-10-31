package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetStreamKeyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type BatchGetStreamKeyRequestBody struct {
	Arns []string `json:"arns"`
}

type BatchGetStreamKeyRequest struct {
	Headers BatchGetStreamKeyHeaders
	Request BatchGetStreamKeyRequestBody `request:"mediaType=application/json"`
}

type BatchGetStreamKeyResponse struct {
	BatchGetStreamKeyResponse *shared.BatchGetStreamKeyResponse
	ContentType               string
	StatusCode                int64
}

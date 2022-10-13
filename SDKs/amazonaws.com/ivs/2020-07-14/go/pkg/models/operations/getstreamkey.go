package operations

import (
	"openapi/pkg/models/shared"
)

type GetStreamKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStreamKeyRequestBody struct {
	Arn string `json:"arn"`
}

type GetStreamKeyRequest struct {
	Headers GetStreamKeyHeaders
	Request GetStreamKeyRequestBody `request:"mediaType=application/json"`
}

type GetStreamKeyResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetStreamKeyResponse      *shared.GetStreamKeyResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}

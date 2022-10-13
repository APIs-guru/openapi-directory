package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlaybackKeyPairHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPlaybackKeyPairRequestBody struct {
	Arn string `json:"arn"`
}

type GetPlaybackKeyPairRequest struct {
	Headers GetPlaybackKeyPairHeaders
	Request GetPlaybackKeyPairRequestBody `request:"mediaType=application/json"`
}

type GetPlaybackKeyPairResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	GetPlaybackKeyPairResponse *shared.GetPlaybackKeyPairResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}

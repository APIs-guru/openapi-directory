package operations

import (
	"openapi/pkg/models/shared"
)

type ImportPlaybackKeyPairHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ImportPlaybackKeyPairRequestBody struct {
	Name              *string           `json:"name"`
	PublicKeyMaterial string            `json:"publicKeyMaterial"`
	Tags              map[string]string `json:"tags"`
}

type ImportPlaybackKeyPairRequest struct {
	Headers ImportPlaybackKeyPairHeaders
	Request ImportPlaybackKeyPairRequestBody `request:"mediaType=application/json"`
}

type ImportPlaybackKeyPairResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	ImportPlaybackKeyPairResponse *shared.ImportPlaybackKeyPairResponse
	PendingVerification           *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}

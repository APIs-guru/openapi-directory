package operations

import (
	"openapi/pkg/models/shared"
)

type GetEncryptionConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEncryptionConfigRequest struct {
	Headers GetEncryptionConfigHeaders
}

type GetEncryptionConfigResponse struct {
	ContentType               string
	GetEncryptionConfigResult *shared.GetEncryptionConfigResult
	InvalidRequestException   *interface{}
	StatusCode                int64
	ThrottledException        *interface{}
}

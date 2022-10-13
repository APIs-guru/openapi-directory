package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateRandomXAmzTargetEnum string

const (
	GenerateRandomXAmzTargetEnumTrentServiceGenerateRandom GenerateRandomXAmzTargetEnum = "TrentService.GenerateRandom"
)

type GenerateRandomHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GenerateRandomXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GenerateRandomRequest struct {
	Headers GenerateRandomHeaders
	Request shared.GenerateRandomRequest `request:"mediaType=application/json"`
}

type GenerateRandomResponse struct {
	ContentType                         string
	CustomKeyStoreInvalidStateException *interface{}
	CustomKeyStoreNotFoundException     *interface{}
	DependencyTimeoutException          *interface{}
	GenerateRandomResponse              *shared.GenerateRandomResponse
	KmsInternalException                *interface{}
	StatusCode                          int64
}

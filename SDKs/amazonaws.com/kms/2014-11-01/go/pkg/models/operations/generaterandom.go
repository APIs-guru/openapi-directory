package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateRandomXAmzTargetEnum string

const (
	GenerateRandomXAmzTargetEnumTrentServiceGenerateRandom GenerateRandomXAmzTargetEnum = "TrentService.GenerateRandom"
)

type GenerateRandomHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GenerateRandomXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

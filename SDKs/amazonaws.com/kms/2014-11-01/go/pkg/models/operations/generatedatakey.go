package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateDataKeyXAmzTargetEnum string

const (
	GenerateDataKeyXAmzTargetEnumTrentServiceGenerateDataKey GenerateDataKeyXAmzTargetEnum = "TrentService.GenerateDataKey"
)

type GenerateDataKeyHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GenerateDataKeyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GenerateDataKeyRequest struct {
	Headers GenerateDataKeyHeaders
	Request shared.GenerateDataKeyRequest `request:"mediaType=application/json"`
}

type GenerateDataKeyResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	DisabledException          *interface{}
	GenerateDataKeyResponse    *shared.GenerateDataKeyResponse
	InvalidGrantTokenException *interface{}
	InvalidKeyUsageException   *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	KeyUnavailableException    *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}

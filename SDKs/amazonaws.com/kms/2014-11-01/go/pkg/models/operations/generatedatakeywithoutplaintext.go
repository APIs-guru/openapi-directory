package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateDataKeyWithoutPlaintextXAmzTargetEnum string

const (
	GenerateDataKeyWithoutPlaintextXAmzTargetEnumTrentServiceGenerateDataKeyWithoutPlaintext GenerateDataKeyWithoutPlaintextXAmzTargetEnum = "TrentService.GenerateDataKeyWithoutPlaintext"
)

type GenerateDataKeyWithoutPlaintextHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GenerateDataKeyWithoutPlaintextXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GenerateDataKeyWithoutPlaintextRequest struct {
	Headers GenerateDataKeyWithoutPlaintextHeaders
	Request shared.GenerateDataKeyWithoutPlaintextRequest `request:"mediaType=application/json"`
}

type GenerateDataKeyWithoutPlaintextResponse struct {
	ContentType                             string
	DependencyTimeoutException              *interface{}
	DisabledException                       *interface{}
	GenerateDataKeyWithoutPlaintextResponse *shared.GenerateDataKeyWithoutPlaintextResponse
	InvalidGrantTokenException              *interface{}
	InvalidKeyUsageException                *interface{}
	KmsInternalException                    *interface{}
	KmsInvalidStateException                *interface{}
	KeyUnavailableException                 *interface{}
	NotFoundException                       *interface{}
	StatusCode                              int64
}

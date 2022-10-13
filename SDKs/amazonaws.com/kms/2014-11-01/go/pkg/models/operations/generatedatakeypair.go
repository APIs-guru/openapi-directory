package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateDataKeyPairXAmzTargetEnum string

const (
	GenerateDataKeyPairXAmzTargetEnumTrentServiceGenerateDataKeyPair GenerateDataKeyPairXAmzTargetEnum = "TrentService.GenerateDataKeyPair"
)

type GenerateDataKeyPairHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GenerateDataKeyPairXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GenerateDataKeyPairRequest struct {
	Headers GenerateDataKeyPairHeaders
	Request shared.GenerateDataKeyPairRequest `request:"mediaType=application/json"`
}

type GenerateDataKeyPairResponse struct {
	ContentType                   string
	DependencyTimeoutException    *interface{}
	DisabledException             *interface{}
	GenerateDataKeyPairResponse   *shared.GenerateDataKeyPairResponse
	InvalidGrantTokenException    *interface{}
	InvalidKeyUsageException      *interface{}
	KmsInternalException          *interface{}
	KmsInvalidStateException      *interface{}
	KeyUnavailableException       *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublicKeyXAmzTargetEnum string

const (
	GetPublicKeyXAmzTargetEnumTrentServiceGetPublicKey GetPublicKeyXAmzTargetEnum = "TrentService.GetPublicKey"
)

type GetPublicKeyHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPublicKeyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPublicKeyRequest struct {
	Headers GetPublicKeyHeaders
	Request shared.GetPublicKeyRequest `request:"mediaType=application/json"`
}

type GetPublicKeyResponse struct {
	ContentType                   string
	DependencyTimeoutException    *interface{}
	DisabledException             *interface{}
	GetPublicKeyResponse          *shared.GetPublicKeyResponse
	InvalidArnException           *interface{}
	InvalidGrantTokenException    *interface{}
	InvalidKeyUsageException      *interface{}
	KmsInternalException          *interface{}
	KmsInvalidStateException      *interface{}
	KeyUnavailableException       *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}

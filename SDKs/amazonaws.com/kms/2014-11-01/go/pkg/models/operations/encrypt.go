package operations

import (
	"openapi/pkg/models/shared"
)

type EncryptXAmzTargetEnum string

const (
	EncryptXAmzTargetEnumTrentServiceEncrypt EncryptXAmzTargetEnum = "TrentService.Encrypt"
)

type EncryptHeaders struct {
	XAmzAlgorithm     *string               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"name=X-Amz-Credential"`
	XAmzDate          *string               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EncryptXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EncryptRequest struct {
	Headers EncryptHeaders
	Request shared.EncryptRequest `request:"mediaType=application/json"`
}

type EncryptResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	DisabledException          *interface{}
	EncryptResponse            *shared.EncryptResponse
	InvalidGrantTokenException *interface{}
	InvalidKeyUsageException   *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	KeyUnavailableException    *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}

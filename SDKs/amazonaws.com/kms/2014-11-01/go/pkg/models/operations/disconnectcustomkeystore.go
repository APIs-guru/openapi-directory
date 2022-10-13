package operations

import (
	"openapi/pkg/models/shared"
)

type DisconnectCustomKeyStoreXAmzTargetEnum string

const (
	DisconnectCustomKeyStoreXAmzTargetEnumTrentServiceDisconnectCustomKeyStore DisconnectCustomKeyStoreXAmzTargetEnum = "TrentService.DisconnectCustomKeyStore"
)

type DisconnectCustomKeyStoreHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisconnectCustomKeyStoreXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisconnectCustomKeyStoreRequest struct {
	Headers DisconnectCustomKeyStoreHeaders
	Request shared.DisconnectCustomKeyStoreRequest `request:"mediaType=application/json"`
}

type DisconnectCustomKeyStoreResponse struct {
	ContentType                         string
	CustomKeyStoreInvalidStateException *interface{}
	CustomKeyStoreNotFoundException     *interface{}
	DisconnectCustomKeyStoreResponse    map[string]interface{}
	KmsInternalException                *interface{}
	StatusCode                          int64
}

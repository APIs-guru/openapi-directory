package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectCustomKeyStoreXAmzTargetEnum string

const (
	ConnectCustomKeyStoreXAmzTargetEnumTrentServiceConnectCustomKeyStore ConnectCustomKeyStoreXAmzTargetEnum = "TrentService.ConnectCustomKeyStore"
)

type ConnectCustomKeyStoreHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ConnectCustomKeyStoreXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ConnectCustomKeyStoreRequest struct {
	Headers ConnectCustomKeyStoreHeaders
	Request shared.ConnectCustomKeyStoreRequest `request:"mediaType=application/json"`
}

type ConnectCustomKeyStoreResponse struct {
	CloudHsmClusterInvalidConfigurationException *interface{}
	CloudHsmClusterNotActiveException            *interface{}
	ConnectCustomKeyStoreResponse                map[string]interface{}
	ContentType                                  string
	CustomKeyStoreInvalidStateException          *interface{}
	CustomKeyStoreNotFoundException              *interface{}
	KmsInternalException                         *interface{}
	StatusCode                                   int64
}

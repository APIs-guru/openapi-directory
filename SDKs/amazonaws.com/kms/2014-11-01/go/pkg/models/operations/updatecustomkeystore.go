package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCustomKeyStoreXAmzTargetEnum string

const (
	UpdateCustomKeyStoreXAmzTargetEnumTrentServiceUpdateCustomKeyStore UpdateCustomKeyStoreXAmzTargetEnum = "TrentService.UpdateCustomKeyStore"
)

type UpdateCustomKeyStoreHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCustomKeyStoreXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateCustomKeyStoreRequest struct {
	Headers UpdateCustomKeyStoreHeaders
	Request shared.UpdateCustomKeyStoreRequest `request:"mediaType=application/json"`
}

type UpdateCustomKeyStoreResponse struct {
	CloudHsmClusterInvalidConfigurationException *interface{}
	CloudHsmClusterNotActiveException            *interface{}
	CloudHsmClusterNotFoundException             *interface{}
	CloudHsmClusterNotRelatedException           *interface{}
	ContentType                                  string
	CustomKeyStoreInvalidStateException          *interface{}
	CustomKeyStoreNameInUseException             *interface{}
	CustomKeyStoreNotFoundException              *interface{}
	KmsInternalException                         *interface{}
	StatusCode                                   int64
	UpdateCustomKeyStoreResponse                 map[string]interface{}
}

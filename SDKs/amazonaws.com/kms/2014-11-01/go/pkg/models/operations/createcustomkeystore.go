package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomKeyStoreXAmzTargetEnum string

const (
	CreateCustomKeyStoreXAmzTargetEnumTrentServiceCreateCustomKeyStore CreateCustomKeyStoreXAmzTargetEnum = "TrentService.CreateCustomKeyStore"
)

type CreateCustomKeyStoreHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCustomKeyStoreXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateCustomKeyStoreRequest struct {
	Headers CreateCustomKeyStoreHeaders
	Request shared.CreateCustomKeyStoreRequest `request:"mediaType=application/json"`
}

type CreateCustomKeyStoreResponse struct {
	CloudHsmClusterInUseException                *interface{}
	CloudHsmClusterInvalidConfigurationException *interface{}
	CloudHsmClusterNotActiveException            *interface{}
	CloudHsmClusterNotFoundException             *interface{}
	ContentType                                  string
	CreateCustomKeyStoreResponse                 *shared.CreateCustomKeyStoreResponse
	CustomKeyStoreNameInUseException             *interface{}
	IncorrectTrustAnchorException                *interface{}
	KmsInternalException                         *interface{}
	StatusCode                                   int64
}

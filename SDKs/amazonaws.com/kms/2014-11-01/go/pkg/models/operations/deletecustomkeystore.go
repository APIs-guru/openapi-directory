package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomKeyStoreXAmzTargetEnum string

const (
	DeleteCustomKeyStoreXAmzTargetEnumTrentServiceDeleteCustomKeyStore DeleteCustomKeyStoreXAmzTargetEnum = "TrentService.DeleteCustomKeyStore"
)

type DeleteCustomKeyStoreHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCustomKeyStoreXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteCustomKeyStoreRequest struct {
	Headers DeleteCustomKeyStoreHeaders
	Request shared.DeleteCustomKeyStoreRequest `request:"mediaType=application/json"`
}

type DeleteCustomKeyStoreResponse struct {
	ContentType                         string
	CustomKeyStoreHasCmKsException      *interface{}
	CustomKeyStoreInvalidStateException *interface{}
	CustomKeyStoreNotFoundException     *interface{}
	DeleteCustomKeyStoreResponse        map[string]interface{}
	KmsInternalException                *interface{}
	StatusCode                          int64
}

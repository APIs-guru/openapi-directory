package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomKeyStoreXAmzTargetEnum string

const (
	DeleteCustomKeyStoreXAmzTargetEnumTrentServiceDeleteCustomKeyStore DeleteCustomKeyStoreXAmzTargetEnum = "TrentService.DeleteCustomKeyStore"
)

type DeleteCustomKeyStoreHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCustomKeyStoreXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

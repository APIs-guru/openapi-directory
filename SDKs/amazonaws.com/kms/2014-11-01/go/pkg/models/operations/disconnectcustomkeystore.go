package operations

import (
	"openapi/pkg/models/shared"
)

type DisconnectCustomKeyStoreXAmzTargetEnum string

const (
	DisconnectCustomKeyStoreXAmzTargetEnumTrentServiceDisconnectCustomKeyStore DisconnectCustomKeyStoreXAmzTargetEnum = "TrentService.DisconnectCustomKeyStore"
)

type DisconnectCustomKeyStoreHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisconnectCustomKeyStoreXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

package operations

import (
	"openapi/pkg/models/shared"
)

type EnableKeyXAmzTargetEnum string

const (
	EnableKeyXAmzTargetEnumTrentServiceEnableKey EnableKeyXAmzTargetEnum = "TrentService.EnableKey"
)

type EnableKeyHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type EnableKeyRequest struct {
	Headers EnableKeyHeaders
	Request shared.EnableKeyRequest `request:"mediaType=application/json"`
}

type EnableKeyResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	InvalidArnException        *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	LimitExceededException     *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}

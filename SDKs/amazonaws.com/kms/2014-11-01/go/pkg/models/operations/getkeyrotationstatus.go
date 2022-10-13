package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeyRotationStatusXAmzTargetEnum string

const (
	GetKeyRotationStatusXAmzTargetEnumTrentServiceGetKeyRotationStatus GetKeyRotationStatusXAmzTargetEnum = "TrentService.GetKeyRotationStatus"
)

type GetKeyRotationStatusHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetKeyRotationStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetKeyRotationStatusRequest struct {
	Headers GetKeyRotationStatusHeaders
	Request shared.GetKeyRotationStatusRequest `request:"mediaType=application/json"`
}

type GetKeyRotationStatusResponse struct {
	ContentType                   string
	DependencyTimeoutException    *interface{}
	GetKeyRotationStatusResponse  *shared.GetKeyRotationStatusResponse
	InvalidArnException           *interface{}
	KmsInternalException          *interface{}
	KmsInvalidStateException      *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type EnableKeyRotationXAmzTargetEnum string

const (
	EnableKeyRotationXAmzTargetEnumTrentServiceEnableKeyRotation EnableKeyRotationXAmzTargetEnum = "TrentService.EnableKeyRotation"
)

type EnableKeyRotationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableKeyRotationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableKeyRotationRequest struct {
	Headers EnableKeyRotationHeaders
	Request shared.EnableKeyRotationRequest `request:"mediaType=application/json"`
}

type EnableKeyRotationResponse struct {
	ContentType                   string
	DependencyTimeoutException    *interface{}
	DisabledException             *interface{}
	InvalidArnException           *interface{}
	KmsInternalException          *interface{}
	KmsInvalidStateException      *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}

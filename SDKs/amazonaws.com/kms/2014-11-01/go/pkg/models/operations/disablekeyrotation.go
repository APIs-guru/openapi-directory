package operations

import (
	"openapi/pkg/models/shared"
)

type DisableKeyRotationXAmzTargetEnum string

const (
	DisableKeyRotationXAmzTargetEnumTrentServiceDisableKeyRotation DisableKeyRotationXAmzTargetEnum = "TrentService.DisableKeyRotation"
)

type DisableKeyRotationHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableKeyRotationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisableKeyRotationRequest struct {
	Headers DisableKeyRotationHeaders
	Request shared.DisableKeyRotationRequest `request:"mediaType=application/json"`
}

type DisableKeyRotationResponse struct {
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

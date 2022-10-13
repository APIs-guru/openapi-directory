package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeyPolicyXAmzTargetEnum string

const (
	GetKeyPolicyXAmzTargetEnumTrentServiceGetKeyPolicy GetKeyPolicyXAmzTargetEnum = "TrentService.GetKeyPolicy"
)

type GetKeyPolicyHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetKeyPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetKeyPolicyRequest struct {
	Headers GetKeyPolicyHeaders
	Request shared.GetKeyPolicyRequest `request:"mediaType=application/json"`
}

type GetKeyPolicyResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	GetKeyPolicyResponse       *shared.GetKeyPolicyResponse
	InvalidArnException        *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}

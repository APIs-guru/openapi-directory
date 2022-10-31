package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeyPolicyXAmzTargetEnum string

const (
	GetKeyPolicyXAmzTargetEnumTrentServiceGetKeyPolicy GetKeyPolicyXAmzTargetEnum = "TrentService.GetKeyPolicy"
)

type GetKeyPolicyHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetKeyPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

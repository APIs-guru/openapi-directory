package operations

import (
	"openapi/pkg/models/shared"
)

type PutResourcePolicyXAmzTargetEnum string

const (
	PutResourcePolicyXAmzTargetEnumNetworkFirewall20201112PutResourcePolicy PutResourcePolicyXAmzTargetEnum = "NetworkFirewall_20201112.PutResourcePolicy"
)

type PutResourcePolicyHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutResourcePolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutResourcePolicyRequest struct {
	Headers PutResourcePolicyHeaders
	Request shared.PutResourcePolicyRequest `request:"mediaType=application/json"`
}

type PutResourcePolicyResponse struct {
	ContentType                    string
	InternalServerError            *interface{}
	InvalidRequestException        *interface{}
	InvalidResourcePolicyException *interface{}
	PutResourcePolicyResponse      map[string]interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}

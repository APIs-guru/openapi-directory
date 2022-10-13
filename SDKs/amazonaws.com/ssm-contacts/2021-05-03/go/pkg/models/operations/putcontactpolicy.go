package operations

import (
	"openapi/pkg/models/shared"
)

type PutContactPolicyXAmzTargetEnum string

const (
	PutContactPolicyXAmzTargetEnumSsmContactsPutContactPolicy PutContactPolicyXAmzTargetEnum = "SSMContacts.PutContactPolicy"
)

type PutContactPolicyHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutContactPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutContactPolicyRequest struct {
	Headers PutContactPolicyHeaders
	Request shared.PutContactPolicyRequest `request:"mediaType=application/json"`
}

type PutContactPolicyResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	PutContactPolicyResult    map[string]interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

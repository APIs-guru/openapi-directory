package operations

import (
	"openapi/pkg/models/shared"
)

type GetContactPolicyXAmzTargetEnum string

const (
	GetContactPolicyXAmzTargetEnumSsmContactsGetContactPolicy GetContactPolicyXAmzTargetEnum = "SSMContacts.GetContactPolicy"
)

type GetContactPolicyHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContactPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetContactPolicyRequest struct {
	Headers GetContactPolicyHeaders
	Request shared.GetContactPolicyRequest `request:"mediaType=application/json"`
}

type GetContactPolicyResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetContactPolicyResult    *shared.GetContactPolicyResult
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

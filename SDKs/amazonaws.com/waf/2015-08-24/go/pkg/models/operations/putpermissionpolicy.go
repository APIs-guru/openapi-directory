package operations

import (
	"openapi/pkg/models/shared"
)

type PutPermissionPolicyXAmzTargetEnum string

const (
	PutPermissionPolicyXAmzTargetEnumAwswaf20150824PutPermissionPolicy PutPermissionPolicyXAmzTargetEnum = "AWSWAF_20150824.PutPermissionPolicy"
)

type PutPermissionPolicyHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutPermissionPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutPermissionPolicyRequest struct {
	Headers PutPermissionPolicyHeaders
	Request shared.PutPermissionPolicyRequest `request:"mediaType=application/json"`
}

type PutPermissionPolicyResponse struct {
	ContentType                         string
	PutPermissionPolicyResponse         map[string]interface{}
	StatusCode                          int64
	WafInternalErrorException           *interface{}
	WafInvalidPermissionPolicyException *interface{}
	WafNonexistentItemException         *interface{}
	WafStaleDataException               *interface{}
}

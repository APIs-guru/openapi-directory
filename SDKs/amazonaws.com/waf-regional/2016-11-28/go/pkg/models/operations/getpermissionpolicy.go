package operations

import (
	"openapi/pkg/models/shared"
)

type GetPermissionPolicyXAmzTargetEnum string

const (
	GetPermissionPolicyXAmzTargetEnumAwswafRegional20161128GetPermissionPolicy GetPermissionPolicyXAmzTargetEnum = "AWSWAF_Regional_20161128.GetPermissionPolicy"
)

type GetPermissionPolicyHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPermissionPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPermissionPolicyRequest struct {
	Headers GetPermissionPolicyHeaders
	Request shared.GetPermissionPolicyRequest `request:"mediaType=application/json"`
}

type GetPermissionPolicyResponse struct {
	ContentType                 string
	GetPermissionPolicyResponse *shared.GetPermissionPolicyResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafNonexistentItemException *interface{}
}

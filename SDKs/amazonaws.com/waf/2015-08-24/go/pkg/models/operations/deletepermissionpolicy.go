package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePermissionPolicyXAmzTargetEnum string

const (
	DeletePermissionPolicyXAmzTargetEnumAwswaf20150824DeletePermissionPolicy DeletePermissionPolicyXAmzTargetEnum = "AWSWAF_20150824.DeletePermissionPolicy"
)

type DeletePermissionPolicyHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePermissionPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePermissionPolicyRequest struct {
	Headers DeletePermissionPolicyHeaders
	Request shared.DeletePermissionPolicyRequest `request:"mediaType=application/json"`
}

type DeletePermissionPolicyResponse struct {
	ContentType                    string
	DeletePermissionPolicyResponse map[string]interface{}
	StatusCode                     int64
	WafInternalErrorException      *interface{}
	WafNonexistentItemException    *interface{}
	WafStaleDataException          *interface{}
}

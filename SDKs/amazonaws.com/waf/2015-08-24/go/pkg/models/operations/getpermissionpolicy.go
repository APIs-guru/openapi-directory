package operations

import (
	"openapi/pkg/models/shared"
)

type GetPermissionPolicyXAmzTargetEnum string

const (
	GetPermissionPolicyXAmzTargetEnumAwswaf20150824GetPermissionPolicy GetPermissionPolicyXAmzTargetEnum = "AWSWAF_20150824.GetPermissionPolicy"
)

type GetPermissionPolicyHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPermissionPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

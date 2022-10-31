package operations

import (
	"openapi/pkg/models/shared"
)

type PutPermissionPolicyXAmzTargetEnum string

const (
	PutPermissionPolicyXAmzTargetEnumAwswafRegional20161128PutPermissionPolicy PutPermissionPolicyXAmzTargetEnum = "AWSWAF_Regional_20161128.PutPermissionPolicy"
)

type PutPermissionPolicyHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutPermissionPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

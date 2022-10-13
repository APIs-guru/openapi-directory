package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateDrtRoleXAmzTargetEnum string

const (
	AssociateDrtRoleXAmzTargetEnumAwsShield20160616AssociateDrtRole AssociateDrtRoleXAmzTargetEnum = "AWSShield_20160616.AssociateDRTRole"
)

type AssociateDrtRoleHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateDrtRoleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateDrtRoleRequest struct {
	Headers AssociateDrtRoleHeaders
	Request shared.AssociateDrtRoleRequest `request:"mediaType=application/json"`
}

type AssociateDrtRoleResponse struct {
	AccessDeniedForDependencyException *interface{}
	AssociateDrtRoleResponse           map[string]interface{}
	ContentType                        string
	InternalErrorException             *interface{}
	InvalidOperationException          *interface{}
	InvalidParameterException          *interface{}
	OptimisticLockException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}

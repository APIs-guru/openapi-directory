package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProtectionGroupXAmzTargetEnum string

const (
	DeleteProtectionGroupXAmzTargetEnumAwsShield20160616DeleteProtectionGroup DeleteProtectionGroupXAmzTargetEnum = "AWSShield_20160616.DeleteProtectionGroup"
)

type DeleteProtectionGroupHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteProtectionGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteProtectionGroupRequest struct {
	Headers DeleteProtectionGroupHeaders
	Request shared.DeleteProtectionGroupRequest `request:"mediaType=application/json"`
}

type DeleteProtectionGroupResponse struct {
	ContentType                   string
	DeleteProtectionGroupResponse map[string]interface{}
	InternalErrorException        *interface{}
	OptimisticLockException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}

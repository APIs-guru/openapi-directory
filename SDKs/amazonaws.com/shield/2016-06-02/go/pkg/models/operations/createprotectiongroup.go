package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProtectionGroupXAmzTargetEnum string

const (
	CreateProtectionGroupXAmzTargetEnumAwsShield20160616CreateProtectionGroup CreateProtectionGroupXAmzTargetEnum = "AWSShield_20160616.CreateProtectionGroup"
)

type CreateProtectionGroupHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateProtectionGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateProtectionGroupRequest struct {
	Headers CreateProtectionGroupHeaders
	Request shared.CreateProtectionGroupRequest `request:"mediaType=application/json"`
}

type CreateProtectionGroupResponse struct {
	ContentType                    string
	CreateProtectionGroupResponse  map[string]interface{}
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	LimitsExceededException        *interface{}
	OptimisticLockException        *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}

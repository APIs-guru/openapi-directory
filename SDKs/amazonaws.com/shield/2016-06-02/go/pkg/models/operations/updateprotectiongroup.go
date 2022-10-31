package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProtectionGroupXAmzTargetEnum string

const (
	UpdateProtectionGroupXAmzTargetEnumAwsShield20160616UpdateProtectionGroup UpdateProtectionGroupXAmzTargetEnum = "AWSShield_20160616.UpdateProtectionGroup"
)

type UpdateProtectionGroupHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateProtectionGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateProtectionGroupRequest struct {
	Headers UpdateProtectionGroupHeaders
	Request shared.UpdateProtectionGroupRequest `request:"mediaType=application/json"`
}

type UpdateProtectionGroupResponse struct {
	ContentType                   string
	InternalErrorException        *interface{}
	InvalidParameterException     *interface{}
	OptimisticLockException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UpdateProtectionGroupResponse map[string]interface{}
}

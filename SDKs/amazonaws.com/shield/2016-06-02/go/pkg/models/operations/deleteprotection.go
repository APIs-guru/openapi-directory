package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProtectionXAmzTargetEnum string

const (
	DeleteProtectionXAmzTargetEnumAwsShield20160616DeleteProtection DeleteProtectionXAmzTargetEnum = "AWSShield_20160616.DeleteProtection"
)

type DeleteProtectionHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteProtectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteProtectionRequest struct {
	Headers DeleteProtectionHeaders
	Request shared.DeleteProtectionRequest `request:"mediaType=application/json"`
}

type DeleteProtectionResponse struct {
	ContentType               string
	DeleteProtectionResponse  map[string]interface{}
	InternalErrorException    *interface{}
	OptimisticLockException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}

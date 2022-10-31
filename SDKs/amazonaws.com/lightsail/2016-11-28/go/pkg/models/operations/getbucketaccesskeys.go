package operations

import (
	"openapi/pkg/models/shared"
)

type GetBucketAccessKeysXAmzTargetEnum string

const (
	GetBucketAccessKeysXAmzTargetEnumLightsail20161128GetBucketAccessKeys GetBucketAccessKeysXAmzTargetEnum = "Lightsail_20161128.GetBucketAccessKeys"
)

type GetBucketAccessKeysHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBucketAccessKeysXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetBucketAccessKeysRequest struct {
	Headers GetBucketAccessKeysHeaders
	Request shared.GetBucketAccessKeysRequest `request:"mediaType=application/json"`
}

type GetBucketAccessKeysResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetBucketAccessKeysResult *shared.GetBucketAccessKeysResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}

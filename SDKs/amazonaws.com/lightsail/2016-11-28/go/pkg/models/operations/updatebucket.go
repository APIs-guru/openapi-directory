package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBucketXAmzTargetEnum string

const (
	UpdateBucketXAmzTargetEnumLightsail20161128UpdateBucket UpdateBucketXAmzTargetEnum = "Lightsail_20161128.UpdateBucket"
)

type UpdateBucketHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateBucketXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateBucketRequest struct {
	Headers UpdateBucketHeaders
	Request shared.UpdateBucketRequest `request:"mediaType=application/json"`
}

type UpdateBucketResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	InvalidInputException    *interface{}
	NotFoundException        *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
	UpdateBucketResult       *shared.UpdateBucketResult
}

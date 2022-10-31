package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBucketXAmzTargetEnum string

const (
	CreateBucketXAmzTargetEnumLightsail20161128CreateBucket CreateBucketXAmzTargetEnum = "Lightsail_20161128.CreateBucket"
)

type CreateBucketHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBucketXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateBucketRequest struct {
	Headers CreateBucketHeaders
	Request shared.CreateBucketRequest `request:"mediaType=application/json"`
}

type CreateBucketResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	CreateBucketResult       *shared.CreateBucketResult
	InvalidInputException    *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
}

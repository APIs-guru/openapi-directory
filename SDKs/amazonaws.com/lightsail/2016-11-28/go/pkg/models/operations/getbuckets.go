package operations

import (
	"openapi/pkg/models/shared"
)

type GetBucketsXAmzTargetEnum string

const (
	GetBucketsXAmzTargetEnumLightsail20161128GetBuckets GetBucketsXAmzTargetEnum = "Lightsail_20161128.GetBuckets"
)

type GetBucketsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBucketsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetBucketsRequest struct {
	Headers GetBucketsHeaders
	Request shared.GetBucketsRequest `request:"mediaType=application/json"`
}

type GetBucketsResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	GetBucketsResult         *shared.GetBucketsResult
	InvalidInputException    *interface{}
	NotFoundException        *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetBucketMetricDataXAmzTargetEnum string

const (
	GetBucketMetricDataXAmzTargetEnumLightsail20161128GetBucketMetricData GetBucketMetricDataXAmzTargetEnum = "Lightsail_20161128.GetBucketMetricData"
)

type GetBucketMetricDataHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBucketMetricDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetBucketMetricDataRequest struct {
	Headers GetBucketMetricDataHeaders
	Request shared.GetBucketMetricDataRequest `request:"mediaType=application/json"`
}

type GetBucketMetricDataResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetBucketMetricDataResult *shared.GetBucketMetricDataResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}

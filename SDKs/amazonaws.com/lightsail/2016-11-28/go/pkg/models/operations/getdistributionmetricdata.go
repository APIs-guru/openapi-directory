package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistributionMetricDataXAmzTargetEnum string

const (
	GetDistributionMetricDataXAmzTargetEnumLightsail20161128GetDistributionMetricData GetDistributionMetricDataXAmzTargetEnum = "Lightsail_20161128.GetDistributionMetricData"
)

type GetDistributionMetricDataHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDistributionMetricDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDistributionMetricDataRequest struct {
	Headers GetDistributionMetricDataHeaders
	Request shared.GetDistributionMetricDataRequest `request:"mediaType=application/json"`
}

type GetDistributionMetricDataResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	GetDistributionMetricDataResult *shared.GetDistributionMetricDataResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}

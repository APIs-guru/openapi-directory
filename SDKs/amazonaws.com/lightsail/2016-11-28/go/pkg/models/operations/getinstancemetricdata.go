package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceMetricDataXAmzTargetEnum string

const (
	GetInstanceMetricDataXAmzTargetEnumLightsail20161128GetInstanceMetricData GetInstanceMetricDataXAmzTargetEnum = "Lightsail_20161128.GetInstanceMetricData"
)

type GetInstanceMetricDataHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstanceMetricDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetInstanceMetricDataRequest struct {
	Headers GetInstanceMetricDataHeaders
	Request shared.GetInstanceMetricDataRequest `request:"mediaType=application/json"`
}

type GetInstanceMetricDataResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetInstanceMetricDataResult     *shared.GetInstanceMetricDataResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}

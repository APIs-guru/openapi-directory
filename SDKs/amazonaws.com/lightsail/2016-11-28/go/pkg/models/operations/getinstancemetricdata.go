package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceMetricDataXAmzTargetEnum string

const (
	GetInstanceMetricDataXAmzTargetEnumLightsail20161128GetInstanceMetricData GetInstanceMetricDataXAmzTargetEnum = "Lightsail_20161128.GetInstanceMetricData"
)

type GetInstanceMetricDataHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstanceMetricDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

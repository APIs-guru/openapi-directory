package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerServiceMetricDataXAmzTargetEnum string

const (
	GetContainerServiceMetricDataXAmzTargetEnumLightsail20161128GetContainerServiceMetricData GetContainerServiceMetricDataXAmzTargetEnum = "Lightsail_20161128.GetContainerServiceMetricData"
)

type GetContainerServiceMetricDataHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContainerServiceMetricDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetContainerServiceMetricDataRequest struct {
	Headers GetContainerServiceMetricDataHeaders
	Request shared.GetContainerServiceMetricDataRequest `request:"mediaType=application/json"`
}

type GetContainerServiceMetricDataResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	GetContainerServiceMetricDataResult *shared.GetContainerServiceMetricDataResult
	InvalidInputException               *interface{}
	NotFoundException                   *interface{}
	ServiceException                    *interface{}
	StatusCode                          int64
	UnauthenticatedException            *interface{}
}

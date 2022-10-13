package operations

import (
	"openapi/pkg/models/shared"
)

type DisableEnhancedMonitoringXAmzTargetEnum string

const (
	DisableEnhancedMonitoringXAmzTargetEnumKinesis20131202DisableEnhancedMonitoring DisableEnhancedMonitoringXAmzTargetEnum = "Kinesis_20131202.DisableEnhancedMonitoring"
)

type DisableEnhancedMonitoringHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableEnhancedMonitoringXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisableEnhancedMonitoringRequest struct {
	Headers DisableEnhancedMonitoringHeaders
	Request shared.DisableEnhancedMonitoringInput `request:"mediaType=application/json"`
}

type DisableEnhancedMonitoringResponse struct {
	ContentType               string
	EnhancedMonitoringOutput  *shared.EnhancedMonitoringOutput
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}

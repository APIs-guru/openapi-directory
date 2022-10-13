package operations

import (
	"openapi/pkg/models/shared"
)

type EnableEnhancedMonitoringXAmzTargetEnum string

const (
	EnableEnhancedMonitoringXAmzTargetEnumKinesis20131202EnableEnhancedMonitoring EnableEnhancedMonitoringXAmzTargetEnum = "Kinesis_20131202.EnableEnhancedMonitoring"
)

type EnableEnhancedMonitoringHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableEnhancedMonitoringXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableEnhancedMonitoringRequest struct {
	Headers EnableEnhancedMonitoringHeaders
	Request shared.EnableEnhancedMonitoringInput `request:"mediaType=application/json"`
}

type EnableEnhancedMonitoringResponse struct {
	ContentType               string
	EnhancedMonitoringOutput  *shared.EnhancedMonitoringOutput
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}

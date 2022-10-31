package operations

import (
	"openapi/pkg/models/shared"
)

type DisableEnhancedMonitoringXAmzTargetEnum string

const (
	DisableEnhancedMonitoringXAmzTargetEnumKinesis20131202DisableEnhancedMonitoring DisableEnhancedMonitoringXAmzTargetEnum = "Kinesis_20131202.DisableEnhancedMonitoring"
)

type DisableEnhancedMonitoringHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableEnhancedMonitoringXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

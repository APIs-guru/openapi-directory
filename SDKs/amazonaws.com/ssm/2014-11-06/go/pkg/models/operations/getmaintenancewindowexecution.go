package operations

import (
	"openapi/pkg/models/shared"
)

type GetMaintenanceWindowExecutionXAmzTargetEnum string

const (
	GetMaintenanceWindowExecutionXAmzTargetEnumAmazonSsmGetMaintenanceWindowExecution GetMaintenanceWindowExecutionXAmzTargetEnum = "AmazonSSM.GetMaintenanceWindowExecution"
)

type GetMaintenanceWindowExecutionHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMaintenanceWindowExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMaintenanceWindowExecutionRequest struct {
	Headers GetMaintenanceWindowExecutionHeaders
	Request shared.GetMaintenanceWindowExecutionRequest `request:"mediaType=application/json"`
}

type GetMaintenanceWindowExecutionResponse struct {
	ContentType                         string
	DoesNotExistException               *interface{}
	GetMaintenanceWindowExecutionResult *shared.GetMaintenanceWindowExecutionResult
	InternalServerError                 *interface{}
	StatusCode                          int64
}

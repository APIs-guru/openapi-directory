package operations

import (
	"openapi/pkg/models/shared"
)

type GetMaintenanceWindowExecutionTaskXAmzTargetEnum string

const (
	GetMaintenanceWindowExecutionTaskXAmzTargetEnumAmazonSsmGetMaintenanceWindowExecutionTask GetMaintenanceWindowExecutionTaskXAmzTargetEnum = "AmazonSSM.GetMaintenanceWindowExecutionTask"
)

type GetMaintenanceWindowExecutionTaskHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMaintenanceWindowExecutionTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMaintenanceWindowExecutionTaskRequest struct {
	Headers GetMaintenanceWindowExecutionTaskHeaders
	Request shared.GetMaintenanceWindowExecutionTaskRequest `request:"mediaType=application/json"`
}

type GetMaintenanceWindowExecutionTaskResponse struct {
	ContentType                             string
	DoesNotExistException                   *interface{}
	GetMaintenanceWindowExecutionTaskResult *shared.GetMaintenanceWindowExecutionTaskResult
	InternalServerError                     *interface{}
	StatusCode                              int64
}

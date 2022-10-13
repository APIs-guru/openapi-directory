package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMaintenanceWindowTaskXAmzTargetEnum string

const (
	UpdateMaintenanceWindowTaskXAmzTargetEnumAmazonSsmUpdateMaintenanceWindowTask UpdateMaintenanceWindowTaskXAmzTargetEnum = "AmazonSSM.UpdateMaintenanceWindowTask"
)

type UpdateMaintenanceWindowTaskHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateMaintenanceWindowTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateMaintenanceWindowTaskRequest struct {
	Headers UpdateMaintenanceWindowTaskHeaders
	Request shared.UpdateMaintenanceWindowTaskRequest `request:"mediaType=application/json"`
}

type UpdateMaintenanceWindowTaskResponse struct {
	ContentType                       string
	DoesNotExistException             *interface{}
	InternalServerError               *interface{}
	StatusCode                        int64
	UpdateMaintenanceWindowTaskResult *shared.UpdateMaintenanceWindowTaskResult
}

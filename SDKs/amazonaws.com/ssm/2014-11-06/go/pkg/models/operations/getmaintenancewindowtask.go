package operations

import (
	"openapi/pkg/models/shared"
)

type GetMaintenanceWindowTaskXAmzTargetEnum string

const (
	GetMaintenanceWindowTaskXAmzTargetEnumAmazonSsmGetMaintenanceWindowTask GetMaintenanceWindowTaskXAmzTargetEnum = "AmazonSSM.GetMaintenanceWindowTask"
)

type GetMaintenanceWindowTaskHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMaintenanceWindowTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMaintenanceWindowTaskRequest struct {
	Headers GetMaintenanceWindowTaskHeaders
	Request shared.GetMaintenanceWindowTaskRequest `request:"mediaType=application/json"`
}

type GetMaintenanceWindowTaskResponse struct {
	ContentType                    string
	DoesNotExistException          *interface{}
	GetMaintenanceWindowTaskResult *shared.GetMaintenanceWindowTaskResult
	InternalServerError            *interface{}
	StatusCode                     int64
}

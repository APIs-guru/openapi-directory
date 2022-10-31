package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMaintenanceWindowTaskXAmzTargetEnum string

const (
	UpdateMaintenanceWindowTaskXAmzTargetEnumAmazonSsmUpdateMaintenanceWindowTask UpdateMaintenanceWindowTaskXAmzTargetEnum = "AmazonSSM.UpdateMaintenanceWindowTask"
)

type UpdateMaintenanceWindowTaskHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateMaintenanceWindowTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

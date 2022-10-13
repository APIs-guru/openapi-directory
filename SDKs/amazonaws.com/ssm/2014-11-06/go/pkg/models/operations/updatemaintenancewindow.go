package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMaintenanceWindowXAmzTargetEnum string

const (
	UpdateMaintenanceWindowXAmzTargetEnumAmazonSsmUpdateMaintenanceWindow UpdateMaintenanceWindowXAmzTargetEnum = "AmazonSSM.UpdateMaintenanceWindow"
)

type UpdateMaintenanceWindowHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateMaintenanceWindowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateMaintenanceWindowRequest struct {
	Headers UpdateMaintenanceWindowHeaders
	Request shared.UpdateMaintenanceWindowRequest `request:"mediaType=application/json"`
}

type UpdateMaintenanceWindowResponse struct {
	ContentType                   string
	DoesNotExistException         *interface{}
	InternalServerError           *interface{}
	StatusCode                    int64
	UpdateMaintenanceWindowResult *shared.UpdateMaintenanceWindowResult
}

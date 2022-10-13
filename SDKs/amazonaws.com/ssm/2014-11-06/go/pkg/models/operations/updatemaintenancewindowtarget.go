package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMaintenanceWindowTargetXAmzTargetEnum string

const (
	UpdateMaintenanceWindowTargetXAmzTargetEnumAmazonSsmUpdateMaintenanceWindowTarget UpdateMaintenanceWindowTargetXAmzTargetEnum = "AmazonSSM.UpdateMaintenanceWindowTarget"
)

type UpdateMaintenanceWindowTargetHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateMaintenanceWindowTargetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateMaintenanceWindowTargetRequest struct {
	Headers UpdateMaintenanceWindowTargetHeaders
	Request shared.UpdateMaintenanceWindowTargetRequest `request:"mediaType=application/json"`
}

type UpdateMaintenanceWindowTargetResponse struct {
	ContentType                         string
	DoesNotExistException               *interface{}
	InternalServerError                 *interface{}
	StatusCode                          int64
	UpdateMaintenanceWindowTargetResult *shared.UpdateMaintenanceWindowTargetResult
}

package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterTargetFromMaintenanceWindowXAmzTargetEnum string

const (
	DeregisterTargetFromMaintenanceWindowXAmzTargetEnumAmazonSsmDeregisterTargetFromMaintenanceWindow DeregisterTargetFromMaintenanceWindowXAmzTargetEnum = "AmazonSSM.DeregisterTargetFromMaintenanceWindow"
)

type DeregisterTargetFromMaintenanceWindowHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterTargetFromMaintenanceWindowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterTargetFromMaintenanceWindowRequest struct {
	Headers DeregisterTargetFromMaintenanceWindowHeaders
	Request shared.DeregisterTargetFromMaintenanceWindowRequest `request:"mediaType=application/json"`
}

type DeregisterTargetFromMaintenanceWindowResponse struct {
	ContentType                                 string
	DeregisterTargetFromMaintenanceWindowResult *shared.DeregisterTargetFromMaintenanceWindowResult
	DoesNotExistException                       *interface{}
	InternalServerError                         *interface{}
	StatusCode                                  int64
	TargetInUseException                        *interface{}
}

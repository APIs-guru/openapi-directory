package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterTaskFromMaintenanceWindowXAmzTargetEnum string

const (
	DeregisterTaskFromMaintenanceWindowXAmzTargetEnumAmazonSsmDeregisterTaskFromMaintenanceWindow DeregisterTaskFromMaintenanceWindowXAmzTargetEnum = "AmazonSSM.DeregisterTaskFromMaintenanceWindow"
)

type DeregisterTaskFromMaintenanceWindowHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterTaskFromMaintenanceWindowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterTaskFromMaintenanceWindowRequest struct {
	Headers DeregisterTaskFromMaintenanceWindowHeaders
	Request shared.DeregisterTaskFromMaintenanceWindowRequest `request:"mediaType=application/json"`
}

type DeregisterTaskFromMaintenanceWindowResponse struct {
	ContentType                               string
	DeregisterTaskFromMaintenanceWindowResult *shared.DeregisterTaskFromMaintenanceWindowResult
	DoesNotExistException                     *interface{}
	InternalServerError                       *interface{}
	StatusCode                                int64
}

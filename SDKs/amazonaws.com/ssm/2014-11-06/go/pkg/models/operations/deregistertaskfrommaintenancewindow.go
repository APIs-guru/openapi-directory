package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterTaskFromMaintenanceWindowXAmzTargetEnum string

const (
	DeregisterTaskFromMaintenanceWindowXAmzTargetEnumAmazonSsmDeregisterTaskFromMaintenanceWindow DeregisterTaskFromMaintenanceWindowXAmzTargetEnum = "AmazonSSM.DeregisterTaskFromMaintenanceWindow"
)

type DeregisterTaskFromMaintenanceWindowHeaders struct {
	XAmzAlgorithm     *string                                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterTaskFromMaintenanceWindowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

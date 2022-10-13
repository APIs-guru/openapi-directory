package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMaintenanceWindowXAmzTargetEnum string

const (
	DeleteMaintenanceWindowXAmzTargetEnumAmazonSsmDeleteMaintenanceWindow DeleteMaintenanceWindowXAmzTargetEnum = "AmazonSSM.DeleteMaintenanceWindow"
)

type DeleteMaintenanceWindowHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMaintenanceWindowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteMaintenanceWindowRequest struct {
	Headers DeleteMaintenanceWindowHeaders
	Request shared.DeleteMaintenanceWindowRequest `request:"mediaType=application/json"`
}

type DeleteMaintenanceWindowResponse struct {
	ContentType                   string
	DeleteMaintenanceWindowResult *shared.DeleteMaintenanceWindowResult
	InternalServerError           *interface{}
	StatusCode                    int64
}

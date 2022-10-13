package operations

import (
	"openapi/pkg/models/shared"
)

type GetMaintenanceWindowXAmzTargetEnum string

const (
	GetMaintenanceWindowXAmzTargetEnumAmazonSsmGetMaintenanceWindow GetMaintenanceWindowXAmzTargetEnum = "AmazonSSM.GetMaintenanceWindow"
)

type GetMaintenanceWindowHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMaintenanceWindowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMaintenanceWindowRequest struct {
	Headers GetMaintenanceWindowHeaders
	Request shared.GetMaintenanceWindowRequest `request:"mediaType=application/json"`
}

type GetMaintenanceWindowResponse struct {
	ContentType                string
	DoesNotExistException      *interface{}
	GetMaintenanceWindowResult *shared.GetMaintenanceWindowResult
	InternalServerError        *interface{}
	StatusCode                 int64
}

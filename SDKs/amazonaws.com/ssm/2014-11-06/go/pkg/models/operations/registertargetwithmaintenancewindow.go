package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterTargetWithMaintenanceWindowXAmzTargetEnum string

const (
	RegisterTargetWithMaintenanceWindowXAmzTargetEnumAmazonSsmRegisterTargetWithMaintenanceWindow RegisterTargetWithMaintenanceWindowXAmzTargetEnum = "AmazonSSM.RegisterTargetWithMaintenanceWindow"
)

type RegisterTargetWithMaintenanceWindowHeaders struct {
	XAmzAlgorithm     *string                                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterTargetWithMaintenanceWindowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RegisterTargetWithMaintenanceWindowRequest struct {
	Headers RegisterTargetWithMaintenanceWindowHeaders
	Request shared.RegisterTargetWithMaintenanceWindowRequest `request:"mediaType=application/json"`
}

type RegisterTargetWithMaintenanceWindowResponse struct {
	ContentType                               string
	DoesNotExistException                     *interface{}
	IdempotentParameterMismatch               *interface{}
	InternalServerError                       *interface{}
	RegisterTargetWithMaintenanceWindowResult *shared.RegisterTargetWithMaintenanceWindowResult
	ResourceLimitExceededException            *interface{}
	StatusCode                                int64
}

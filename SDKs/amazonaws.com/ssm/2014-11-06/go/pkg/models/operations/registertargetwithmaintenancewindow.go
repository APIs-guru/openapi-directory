package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterTargetWithMaintenanceWindowXAmzTargetEnum string

const (
	RegisterTargetWithMaintenanceWindowXAmzTargetEnumAmazonSsmRegisterTargetWithMaintenanceWindow RegisterTargetWithMaintenanceWindowXAmzTargetEnum = "AmazonSSM.RegisterTargetWithMaintenanceWindow"
)

type RegisterTargetWithMaintenanceWindowHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterTargetWithMaintenanceWindowXAmzTargetEnum `header:"name=X-Amz-Target"`
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

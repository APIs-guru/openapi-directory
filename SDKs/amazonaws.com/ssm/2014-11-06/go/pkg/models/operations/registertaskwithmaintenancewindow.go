package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterTaskWithMaintenanceWindowXAmzTargetEnum string

const (
	RegisterTaskWithMaintenanceWindowXAmzTargetEnumAmazonSsmRegisterTaskWithMaintenanceWindow RegisterTaskWithMaintenanceWindowXAmzTargetEnum = "AmazonSSM.RegisterTaskWithMaintenanceWindow"
)

type RegisterTaskWithMaintenanceWindowHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterTaskWithMaintenanceWindowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterTaskWithMaintenanceWindowRequest struct {
	Headers RegisterTaskWithMaintenanceWindowHeaders
	Request shared.RegisterTaskWithMaintenanceWindowRequest `request:"mediaType=application/json"`
}

type RegisterTaskWithMaintenanceWindowResponse struct {
	ContentType                             string
	DoesNotExistException                   *interface{}
	FeatureNotAvailableException            *interface{}
	IdempotentParameterMismatch             *interface{}
	InternalServerError                     *interface{}
	RegisterTaskWithMaintenanceWindowResult *shared.RegisterTaskWithMaintenanceWindowResult
	ResourceLimitExceededException          *interface{}
	StatusCode                              int64
}

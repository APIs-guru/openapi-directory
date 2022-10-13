package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMaintenanceWindowXAmzTargetEnum string

const (
	CreateMaintenanceWindowXAmzTargetEnumAmazonSsmCreateMaintenanceWindow CreateMaintenanceWindowXAmzTargetEnum = "AmazonSSM.CreateMaintenanceWindow"
)

type CreateMaintenanceWindowHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateMaintenanceWindowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateMaintenanceWindowRequest struct {
	Headers CreateMaintenanceWindowHeaders
	Request shared.CreateMaintenanceWindowRequest `request:"mediaType=application/json"`
}

type CreateMaintenanceWindowResponse struct {
	ContentType                    string
	CreateMaintenanceWindowResult  *shared.CreateMaintenanceWindowResult
	IdempotentParameterMismatch    *interface{}
	InternalServerError            *interface{}
	ResourceLimitExceededException *interface{}
	StatusCode                     int64
}

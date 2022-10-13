package operations

import (
	"openapi/pkg/models/shared"
)

type CancelMaintenanceWindowExecutionXAmzTargetEnum string

const (
	CancelMaintenanceWindowExecutionXAmzTargetEnumAmazonSsmCancelMaintenanceWindowExecution CancelMaintenanceWindowExecutionXAmzTargetEnum = "AmazonSSM.CancelMaintenanceWindowExecution"
)

type CancelMaintenanceWindowExecutionHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelMaintenanceWindowExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelMaintenanceWindowExecutionRequest struct {
	Headers CancelMaintenanceWindowExecutionHeaders
	Request shared.CancelMaintenanceWindowExecutionRequest `request:"mediaType=application/json"`
}

type CancelMaintenanceWindowExecutionResponse struct {
	CancelMaintenanceWindowExecutionResult *shared.CancelMaintenanceWindowExecutionResult
	ContentType                            string
	DoesNotExistException                  *interface{}
	InternalServerError                    *interface{}
	StatusCode                             int64
}

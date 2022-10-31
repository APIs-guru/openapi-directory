package operations

import (
	"openapi/pkg/models/shared"
)

type CancelMaintenanceWindowExecutionXAmzTargetEnum string

const (
	CancelMaintenanceWindowExecutionXAmzTargetEnumAmazonSsmCancelMaintenanceWindowExecution CancelMaintenanceWindowExecutionXAmzTargetEnum = "AmazonSSM.CancelMaintenanceWindowExecution"
)

type CancelMaintenanceWindowExecutionHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelMaintenanceWindowExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

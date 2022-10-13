package operations

import (
	"openapi/pkg/models/shared"
)

type StartMaintenanceXAmzTargetEnum string

const (
	StartMaintenanceXAmzTargetEnumOpsWorksCmV20161101StartMaintenance StartMaintenanceXAmzTargetEnum = "OpsWorksCM_V2016_11_01.StartMaintenance"
)

type StartMaintenanceHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartMaintenanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartMaintenanceRequest struct {
	Headers StartMaintenanceHeaders
	Request shared.StartMaintenanceRequest `request:"mediaType=application/json"`
}

type StartMaintenanceResponse struct {
	ContentType               string
	InvalidStateException     *interface{}
	ResourceNotFoundException *interface{}
	StartMaintenanceResponse  *shared.StartMaintenanceResponse
	StatusCode                int64
	ValidationException       *interface{}
}

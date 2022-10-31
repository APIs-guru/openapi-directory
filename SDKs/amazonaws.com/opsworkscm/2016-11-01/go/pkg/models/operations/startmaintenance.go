package operations

import (
	"openapi/pkg/models/shared"
)

type StartMaintenanceXAmzTargetEnum string

const (
	StartMaintenanceXAmzTargetEnumOpsWorksCmV20161101StartMaintenance StartMaintenanceXAmzTargetEnum = "OpsWorksCM_V2016_11_01.StartMaintenance"
)

type StartMaintenanceHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartMaintenanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateJobShipmentStateXAmzTargetEnum string

const (
	UpdateJobShipmentStateXAmzTargetEnumAwsieSnowballJobManagementServiceUpdateJobShipmentState UpdateJobShipmentStateXAmzTargetEnum = "AWSIESnowballJobManagementService.UpdateJobShipmentState"
)

type UpdateJobShipmentStateHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateJobShipmentStateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateJobShipmentStateRequest struct {
	Headers UpdateJobShipmentStateHeaders
	Request shared.UpdateJobShipmentStateRequest `request:"mediaType=application/json"`
}

type UpdateJobShipmentStateResponse struct {
	ContentType                  string
	InvalidJobStateException     *interface{}
	InvalidResourceException     *interface{}
	StatusCode                   int64
	UpdateJobShipmentStateResult map[string]interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateJobShipmentStateXAmzTargetEnum string

const (
	UpdateJobShipmentStateXAmzTargetEnumAwsieSnowballJobManagementServiceUpdateJobShipmentState UpdateJobShipmentStateXAmzTargetEnum = "AWSIESnowballJobManagementService.UpdateJobShipmentState"
)

type UpdateJobShipmentStateHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateJobShipmentStateXAmzTargetEnum `header:"name=X-Amz-Target"`
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

package operations

import (
	"openapi/pkg/models/shared"
)

type GetSoftwareUpdatesXAmzTargetEnum string

const (
	GetSoftwareUpdatesXAmzTargetEnumAwsieSnowballJobManagementServiceGetSoftwareUpdates GetSoftwareUpdatesXAmzTargetEnum = "AWSIESnowballJobManagementService.GetSoftwareUpdates"
)

type GetSoftwareUpdatesHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSoftwareUpdatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSoftwareUpdatesRequest struct {
	Headers GetSoftwareUpdatesHeaders
	Request shared.GetSoftwareUpdatesRequest `request:"mediaType=application/json"`
}

type GetSoftwareUpdatesResponse struct {
	ContentType              string
	GetSoftwareUpdatesResult *shared.GetSoftwareUpdatesResult
	InvalidJobStateException *interface{}
	InvalidResourceException *interface{}
	StatusCode               int64
}

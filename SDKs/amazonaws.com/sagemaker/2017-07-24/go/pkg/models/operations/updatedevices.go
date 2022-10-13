package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDevicesXAmzTargetEnum string

const (
	UpdateDevicesXAmzTargetEnumSageMakerUpdateDevices UpdateDevicesXAmzTargetEnum = "SageMaker.UpdateDevices"
)

type UpdateDevicesHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDevicesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDevicesRequest struct {
	Headers UpdateDevicesHeaders
	Request shared.UpdateDevicesRequest `request:"mediaType=application/json"`
}

type UpdateDevicesResponse struct {
	ContentType string
	StatusCode  int64
}

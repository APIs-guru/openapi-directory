package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDevicesXAmzTargetEnum string

const (
	UpdateDevicesXAmzTargetEnumSageMakerUpdateDevices UpdateDevicesXAmzTargetEnum = "SageMaker.UpdateDevices"
)

type UpdateDevicesHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDevicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateDevicesRequest struct {
	Headers UpdateDevicesHeaders
	Request shared.UpdateDevicesRequest `request:"mediaType=application/json"`
}

type UpdateDevicesResponse struct {
	ContentType string
	StatusCode  int64
}

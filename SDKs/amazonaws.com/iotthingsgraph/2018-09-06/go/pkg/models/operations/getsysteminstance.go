package operations

import (
	"openapi/pkg/models/shared"
)

type GetSystemInstanceXAmzTargetEnum string

const (
	GetSystemInstanceXAmzTargetEnumIotThingsGraphFrontEndServiceGetSystemInstance GetSystemInstanceXAmzTargetEnum = "IotThingsGraphFrontEndService.GetSystemInstance"
)

type GetSystemInstanceHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSystemInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSystemInstanceRequest struct {
	Headers GetSystemInstanceHeaders
	Request shared.GetSystemInstanceRequest `request:"mediaType=application/json"`
}

type GetSystemInstanceResponse struct {
	ContentType               string
	GetSystemInstanceResponse *shared.GetSystemInstanceResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}

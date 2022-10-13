package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceInstanceXAmzTargetEnum string

const (
	GetServiceInstanceXAmzTargetEnumAwsProton20200720GetServiceInstance GetServiceInstanceXAmzTargetEnum = "AwsProton20200720.GetServiceInstance"
)

type GetServiceInstanceHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServiceInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetServiceInstanceRequest struct {
	Headers GetServiceInstanceHeaders
	Request shared.GetServiceInstanceInput `request:"mediaType=application/json"`
}

type GetServiceInstanceResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetServiceInstanceOutput  *shared.GetServiceInstanceOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

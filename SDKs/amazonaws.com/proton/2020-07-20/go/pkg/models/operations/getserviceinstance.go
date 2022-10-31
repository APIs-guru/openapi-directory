package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceInstanceXAmzTargetEnum string

const (
	GetServiceInstanceXAmzTargetEnumAwsProton20200720GetServiceInstance GetServiceInstanceXAmzTargetEnum = "AwsProton20200720.GetServiceInstance"
)

type GetServiceInstanceHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServiceInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

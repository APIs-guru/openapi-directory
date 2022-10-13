package operations

import (
	"openapi/pkg/models/shared"
)

type CreateServiceXAmzTargetEnum string

const (
	CreateServiceXAmzTargetEnumRoute53AutoNamingV20170314CreateService CreateServiceXAmzTargetEnum = "Route53AutoNaming_v20170314.CreateService"
)

type CreateServiceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateServiceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateServiceRequest struct {
	Headers CreateServiceHeaders
	Request shared.CreateServiceRequest `request:"mediaType=application/json"`
}

type CreateServiceResponse struct {
	ContentType           string
	CreateServiceResponse *shared.CreateServiceResponse
	InvalidInput          *interface{}
	NamespaceNotFound     *interface{}
	ResourceLimitExceeded *interface{}
	ServiceAlreadyExists  *interface{}
	StatusCode            int64
	TooManyTagsException  *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceXAmzTargetEnum string

const (
	GetServiceXAmzTargetEnumRoute53AutoNamingV20170314GetService GetServiceXAmzTargetEnum = "Route53AutoNaming_v20170314.GetService"
)

type GetServiceHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServiceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetServiceRequest struct {
	Headers GetServiceHeaders
	Request shared.GetServiceRequest `request:"mediaType=application/json"`
}

type GetServiceResponse struct {
	ContentType        string
	GetServiceResponse *shared.GetServiceResponse
	InvalidInput       *interface{}
	ServiceNotFound    *interface{}
	StatusCode         int64
}

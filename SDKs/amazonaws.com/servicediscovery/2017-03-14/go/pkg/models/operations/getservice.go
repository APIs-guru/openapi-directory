package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceXAmzTargetEnum string

const (
	GetServiceXAmzTargetEnumRoute53AutoNamingV20170314GetService GetServiceXAmzTargetEnum = "Route53AutoNaming_v20170314.GetService"
)

type GetServiceHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

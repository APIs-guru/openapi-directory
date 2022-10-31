package operations

import (
	"openapi/pkg/models/shared"
)

type GetResolverQueryLogConfigXAmzTargetEnum string

const (
	GetResolverQueryLogConfigXAmzTargetEnumRoute53ResolverGetResolverQueryLogConfig GetResolverQueryLogConfigXAmzTargetEnum = "Route53Resolver.GetResolverQueryLogConfig"
)

type GetResolverQueryLogConfigHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResolverQueryLogConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetResolverQueryLogConfigRequest struct {
	Headers GetResolverQueryLogConfigHeaders
	Request shared.GetResolverQueryLogConfigRequest `request:"mediaType=application/json"`
}

type GetResolverQueryLogConfigResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	GetResolverQueryLogConfigResponse *shared.GetResolverQueryLogConfigResponse
	InternalServiceErrorException     *interface{}
	InvalidParameterException         *interface{}
	InvalidRequestException           *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
}

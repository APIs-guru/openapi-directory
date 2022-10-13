package operations

import (
	"openapi/pkg/models/shared"
)

type GetResolverDnssecConfigXAmzTargetEnum string

const (
	GetResolverDnssecConfigXAmzTargetEnumRoute53ResolverGetResolverDnssecConfig GetResolverDnssecConfigXAmzTargetEnum = "Route53Resolver.GetResolverDnssecConfig"
)

type GetResolverDnssecConfigHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResolverDnssecConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetResolverDnssecConfigRequest struct {
	Headers GetResolverDnssecConfigHeaders
	Request shared.GetResolverDnssecConfigRequest `request:"mediaType=application/json"`
}

type GetResolverDnssecConfigResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	GetResolverDnssecConfigResponse *shared.GetResolverDnssecConfigResponse
	InternalServiceErrorException   *interface{}
	InvalidParameterException       *interface{}
	InvalidRequestException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResolverDnssecConfigXAmzTargetEnum string

const (
	UpdateResolverDnssecConfigXAmzTargetEnumRoute53ResolverUpdateResolverDnssecConfig UpdateResolverDnssecConfigXAmzTargetEnum = "Route53Resolver.UpdateResolverDnssecConfig"
)

type UpdateResolverDnssecConfigHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateResolverDnssecConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateResolverDnssecConfigRequest struct {
	Headers UpdateResolverDnssecConfigHeaders
	Request shared.UpdateResolverDnssecConfigRequest `request:"mediaType=application/json"`
}

type UpdateResolverDnssecConfigResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	InternalServiceErrorException      *interface{}
	InvalidParameterException          *interface{}
	InvalidRequestException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	UpdateResolverDnssecConfigResponse *shared.UpdateResolverDnssecConfigResponse
}

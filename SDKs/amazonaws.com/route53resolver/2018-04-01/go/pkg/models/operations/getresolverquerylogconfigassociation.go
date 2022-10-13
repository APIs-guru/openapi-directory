package operations

import (
	"openapi/pkg/models/shared"
)

type GetResolverQueryLogConfigAssociationXAmzTargetEnum string

const (
	GetResolverQueryLogConfigAssociationXAmzTargetEnumRoute53ResolverGetResolverQueryLogConfigAssociation GetResolverQueryLogConfigAssociationXAmzTargetEnum = "Route53Resolver.GetResolverQueryLogConfigAssociation"
)

type GetResolverQueryLogConfigAssociationHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResolverQueryLogConfigAssociationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetResolverQueryLogConfigAssociationRequest struct {
	Headers GetResolverQueryLogConfigAssociationHeaders
	Request shared.GetResolverQueryLogConfigAssociationRequest `request:"mediaType=application/json"`
}

type GetResolverQueryLogConfigAssociationResponse struct {
	AccessDeniedException                        *interface{}
	ContentType                                  string
	GetResolverQueryLogConfigAssociationResponse *shared.GetResolverQueryLogConfigAssociationResponse
	InternalServiceErrorException                *interface{}
	InvalidParameterException                    *interface{}
	InvalidRequestException                      *interface{}
	ResourceNotFoundException                    *interface{}
	StatusCode                                   int64
	ThrottlingException                          *interface{}
}

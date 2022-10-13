package operations

import (
	"openapi/pkg/models/shared"
)

type ListResolverQueryLogConfigAssociationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListResolverQueryLogConfigAssociationsXAmzTargetEnum string

const (
	ListResolverQueryLogConfigAssociationsXAmzTargetEnumRoute53ResolverListResolverQueryLogConfigAssociations ListResolverQueryLogConfigAssociationsXAmzTargetEnum = "Route53Resolver.ListResolverQueryLogConfigAssociations"
)

type ListResolverQueryLogConfigAssociationsHeaders struct {
	XAmzAlgorithm     *string                                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListResolverQueryLogConfigAssociationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListResolverQueryLogConfigAssociationsRequest struct {
	QueryParams ListResolverQueryLogConfigAssociationsQueryParams
	Headers     ListResolverQueryLogConfigAssociationsHeaders
	Request     shared.ListResolverQueryLogConfigAssociationsRequest `request:"mediaType=application/json"`
}

type ListResolverQueryLogConfigAssociationsResponse struct {
	AccessDeniedException                          *interface{}
	ContentType                                    string
	InternalServiceErrorException                  *interface{}
	InvalidParameterException                      *interface{}
	InvalidRequestException                        *interface{}
	LimitExceededException                         *interface{}
	ListResolverQueryLogConfigAssociationsResponse *shared.ListResolverQueryLogConfigAssociationsResponse
	StatusCode                                     int64
	ThrottlingException                            *interface{}
}

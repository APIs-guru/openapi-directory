package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateResolverQueryLogConfigXAmzTargetEnum string

const (
	AssociateResolverQueryLogConfigXAmzTargetEnumRoute53ResolverAssociateResolverQueryLogConfig AssociateResolverQueryLogConfigXAmzTargetEnum = "Route53Resolver.AssociateResolverQueryLogConfig"
)

type AssociateResolverQueryLogConfigHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateResolverQueryLogConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociateResolverQueryLogConfigRequest struct {
	Headers AssociateResolverQueryLogConfigHeaders
	Request shared.AssociateResolverQueryLogConfigRequest `request:"mediaType=application/json"`
}

type AssociateResolverQueryLogConfigResponse struct {
	AccessDeniedException                   *interface{}
	AssociateResolverQueryLogConfigResponse *shared.AssociateResolverQueryLogConfigResponse
	ContentType                             string
	InternalServiceErrorException           *interface{}
	InvalidParameterException               *interface{}
	InvalidRequestException                 *interface{}
	LimitExceededException                  *interface{}
	ResourceExistsException                 *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
}

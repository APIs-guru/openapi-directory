package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateResolverQueryLogConfigXAmzTargetEnum string

const (
	DisassociateResolverQueryLogConfigXAmzTargetEnumRoute53ResolverDisassociateResolverQueryLogConfig DisassociateResolverQueryLogConfigXAmzTargetEnum = "Route53Resolver.DisassociateResolverQueryLogConfig"
)

type DisassociateResolverQueryLogConfigHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateResolverQueryLogConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateResolverQueryLogConfigRequest struct {
	Headers DisassociateResolverQueryLogConfigHeaders
	Request shared.DisassociateResolverQueryLogConfigRequest `request:"mediaType=application/json"`
}

type DisassociateResolverQueryLogConfigResponse struct {
	AccessDeniedException                      *interface{}
	ContentType                                string
	DisassociateResolverQueryLogConfigResponse *shared.DisassociateResolverQueryLogConfigResponse
	InternalServiceErrorException              *interface{}
	InvalidParameterException                  *interface{}
	InvalidRequestException                    *interface{}
	ResourceNotFoundException                  *interface{}
	StatusCode                                 int64
	ThrottlingException                        *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFirewallDomainListXAmzTargetEnum string

const (
	CreateFirewallDomainListXAmzTargetEnumRoute53ResolverCreateFirewallDomainList CreateFirewallDomainListXAmzTargetEnum = "Route53Resolver.CreateFirewallDomainList"
)

type CreateFirewallDomainListHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFirewallDomainListXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateFirewallDomainListRequest struct {
	Headers CreateFirewallDomainListHeaders
	Request shared.CreateFirewallDomainListRequest `request:"mediaType=application/json"`
}

type CreateFirewallDomainListResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	CreateFirewallDomainListResponse *shared.CreateFirewallDomainListResponse
	InternalServiceErrorException    *interface{}
	LimitExceededException           *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}

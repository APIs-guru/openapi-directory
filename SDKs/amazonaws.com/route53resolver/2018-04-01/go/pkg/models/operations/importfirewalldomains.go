package operations

import (
	"openapi/pkg/models/shared"
)

type ImportFirewallDomainsXAmzTargetEnum string

const (
	ImportFirewallDomainsXAmzTargetEnumRoute53ResolverImportFirewallDomains ImportFirewallDomainsXAmzTargetEnum = "Route53Resolver.ImportFirewallDomains"
)

type ImportFirewallDomainsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportFirewallDomainsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ImportFirewallDomainsRequest struct {
	Headers ImportFirewallDomainsHeaders
	Request shared.ImportFirewallDomainsRequest `request:"mediaType=application/json"`
}

type ImportFirewallDomainsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	ImportFirewallDomainsResponse *shared.ImportFirewallDomainsResponse
	InternalServiceErrorException *interface{}
	LimitExceededException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

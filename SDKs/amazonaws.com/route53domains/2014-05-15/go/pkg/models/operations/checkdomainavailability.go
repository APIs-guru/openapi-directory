package operations

import (
	"openapi/pkg/models/shared"
)

type CheckDomainAvailabilityXAmzTargetEnum string

const (
	CheckDomainAvailabilityXAmzTargetEnumRoute53DomainsV20140515CheckDomainAvailability CheckDomainAvailabilityXAmzTargetEnum = "Route53Domains_v20140515.CheckDomainAvailability"
)

type CheckDomainAvailabilityHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CheckDomainAvailabilityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CheckDomainAvailabilityRequest struct {
	Headers CheckDomainAvailabilityHeaders
	Request shared.CheckDomainAvailabilityRequest `request:"mediaType=application/json"`
}

type CheckDomainAvailabilityResponse struct {
	CheckDomainAvailabilityResponse *shared.CheckDomainAvailabilityResponse
	ContentType                     string
	InvalidInput                    *interface{}
	StatusCode                      int64
	UnsupportedTld                  *interface{}
}

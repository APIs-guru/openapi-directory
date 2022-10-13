package operations

import (
	"openapi/pkg/models/shared"
)

type CheckDomainTransferabilityXAmzTargetEnum string

const (
	CheckDomainTransferabilityXAmzTargetEnumRoute53DomainsV20140515CheckDomainTransferability CheckDomainTransferabilityXAmzTargetEnum = "Route53Domains_v20140515.CheckDomainTransferability"
)

type CheckDomainTransferabilityHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CheckDomainTransferabilityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CheckDomainTransferabilityRequest struct {
	Headers CheckDomainTransferabilityHeaders
	Request shared.CheckDomainTransferabilityRequest `request:"mediaType=application/json"`
}

type CheckDomainTransferabilityResponse struct {
	CheckDomainTransferabilityResponse *shared.CheckDomainTransferabilityResponse
	ContentType                        string
	InvalidInput                       *interface{}
	StatusCode                         int64
	UnsupportedTld                     *interface{}
}

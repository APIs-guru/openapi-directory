package operations

import (
	"openapi/pkg/models/shared"
)

type RenewDomainXAmzTargetEnum string

const (
	RenewDomainXAmzTargetEnumRoute53DomainsV20140515RenewDomain RenewDomainXAmzTargetEnum = "Route53Domains_v20140515.RenewDomain"
)

type RenewDomainHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RenewDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RenewDomainRequest struct {
	Headers RenewDomainHeaders
	Request shared.RenewDomainRequest `request:"mediaType=application/json"`
}

type RenewDomainResponse struct {
	ContentType            string
	DuplicateRequest       *interface{}
	InvalidInput           *interface{}
	OperationLimitExceeded *interface{}
	RenewDomainResponse    *shared.RenewDomainResponse
	StatusCode             int64
	TldRulesViolation      *interface{}
	UnsupportedTld         *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type TransferDomainXAmzTargetEnum string

const (
	TransferDomainXAmzTargetEnumRoute53DomainsV20140515TransferDomain TransferDomainXAmzTargetEnum = "Route53Domains_v20140515.TransferDomain"
)

type TransferDomainHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TransferDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TransferDomainRequest struct {
	Headers TransferDomainHeaders
	Request shared.TransferDomainRequest `request:"mediaType=application/json"`
}

type TransferDomainResponse struct {
	ContentType            string
	DomainLimitExceeded    *interface{}
	DuplicateRequest       *interface{}
	InvalidInput           *interface{}
	OperationLimitExceeded *interface{}
	StatusCode             int64
	TldRulesViolation      *interface{}
	TransferDomainResponse *shared.TransferDomainResponse
	UnsupportedTld         *interface{}
}

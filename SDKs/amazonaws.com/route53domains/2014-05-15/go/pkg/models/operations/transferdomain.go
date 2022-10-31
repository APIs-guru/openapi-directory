package operations

import (
	"openapi/pkg/models/shared"
)

type TransferDomainXAmzTargetEnum string

const (
	TransferDomainXAmzTargetEnumRoute53DomainsV20140515TransferDomain TransferDomainXAmzTargetEnum = "Route53Domains_v20140515.TransferDomain"
)

type TransferDomainHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TransferDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

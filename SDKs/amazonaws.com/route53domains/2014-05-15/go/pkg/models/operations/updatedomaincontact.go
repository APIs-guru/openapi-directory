package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainContactXAmzTargetEnum string

const (
	UpdateDomainContactXAmzTargetEnumRoute53DomainsV20140515UpdateDomainContact UpdateDomainContactXAmzTargetEnum = "Route53Domains_v20140515.UpdateDomainContact"
)

type UpdateDomainContactHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDomainContactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateDomainContactRequest struct {
	Headers UpdateDomainContactHeaders
	Request shared.UpdateDomainContactRequest `request:"mediaType=application/json"`
}

type UpdateDomainContactResponse struct {
	ContentType                 string
	DuplicateRequest            *interface{}
	InvalidInput                *interface{}
	OperationLimitExceeded      *interface{}
	StatusCode                  int64
	TldRulesViolation           *interface{}
	UnsupportedTld              *interface{}
	UpdateDomainContactResponse *shared.UpdateDomainContactResponse
}

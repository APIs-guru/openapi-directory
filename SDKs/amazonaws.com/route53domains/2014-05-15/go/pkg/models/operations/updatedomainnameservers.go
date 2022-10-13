package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainNameserversXAmzTargetEnum string

const (
	UpdateDomainNameserversXAmzTargetEnumRoute53DomainsV20140515UpdateDomainNameservers UpdateDomainNameserversXAmzTargetEnum = "Route53Domains_v20140515.UpdateDomainNameservers"
)

type UpdateDomainNameserversHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDomainNameserversXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDomainNameserversRequest struct {
	Headers UpdateDomainNameserversHeaders
	Request shared.UpdateDomainNameserversRequest `request:"mediaType=application/json"`
}

type UpdateDomainNameserversResponse struct {
	ContentType                     string
	DuplicateRequest                *interface{}
	InvalidInput                    *interface{}
	OperationLimitExceeded          *interface{}
	StatusCode                      int64
	TldRulesViolation               *interface{}
	UnsupportedTld                  *interface{}
	UpdateDomainNameserversResponse *shared.UpdateDomainNameserversResponse
}

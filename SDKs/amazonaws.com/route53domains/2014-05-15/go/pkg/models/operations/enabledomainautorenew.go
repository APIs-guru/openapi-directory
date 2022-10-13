package operations

import (
	"openapi/pkg/models/shared"
)

type EnableDomainAutoRenewXAmzTargetEnum string

const (
	EnableDomainAutoRenewXAmzTargetEnumRoute53DomainsV20140515EnableDomainAutoRenew EnableDomainAutoRenewXAmzTargetEnum = "Route53Domains_v20140515.EnableDomainAutoRenew"
)

type EnableDomainAutoRenewHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableDomainAutoRenewXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableDomainAutoRenewRequest struct {
	Headers EnableDomainAutoRenewHeaders
	Request shared.EnableDomainAutoRenewRequest `request:"mediaType=application/json"`
}

type EnableDomainAutoRenewResponse struct {
	ContentType                   string
	EnableDomainAutoRenewResponse map[string]interface{}
	InvalidInput                  *interface{}
	StatusCode                    int64
	TldRulesViolation             *interface{}
	UnsupportedTld                *interface{}
}

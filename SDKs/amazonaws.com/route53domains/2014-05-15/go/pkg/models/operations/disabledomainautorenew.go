package operations

import (
	"openapi/pkg/models/shared"
)

type DisableDomainAutoRenewXAmzTargetEnum string

const (
	DisableDomainAutoRenewXAmzTargetEnumRoute53DomainsV20140515DisableDomainAutoRenew DisableDomainAutoRenewXAmzTargetEnum = "Route53Domains_v20140515.DisableDomainAutoRenew"
)

type DisableDomainAutoRenewHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableDomainAutoRenewXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisableDomainAutoRenewRequest struct {
	Headers DisableDomainAutoRenewHeaders
	Request shared.DisableDomainAutoRenewRequest `request:"mediaType=application/json"`
}

type DisableDomainAutoRenewResponse struct {
	ContentType                    string
	DisableDomainAutoRenewResponse map[string]interface{}
	InvalidInput                   *interface{}
	StatusCode                     int64
	UnsupportedTld                 *interface{}
}

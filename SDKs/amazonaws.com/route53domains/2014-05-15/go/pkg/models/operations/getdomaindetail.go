package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainDetailXAmzTargetEnum string

const (
	GetDomainDetailXAmzTargetEnumRoute53DomainsV20140515GetDomainDetail GetDomainDetailXAmzTargetEnum = "Route53Domains_v20140515.GetDomainDetail"
)

type GetDomainDetailHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDomainDetailXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDomainDetailRequest struct {
	Headers GetDomainDetailHeaders
	Request shared.GetDomainDetailRequest `request:"mediaType=application/json"`
}

type GetDomainDetailResponse struct {
	ContentType             string
	GetDomainDetailResponse *shared.GetDomainDetailResponse
	InvalidInput            *interface{}
	StatusCode              int64
	UnsupportedTld          *interface{}
}

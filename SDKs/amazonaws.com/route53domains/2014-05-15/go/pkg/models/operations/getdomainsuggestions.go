package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainSuggestionsXAmzTargetEnum string

const (
	GetDomainSuggestionsXAmzTargetEnumRoute53DomainsV20140515GetDomainSuggestions GetDomainSuggestionsXAmzTargetEnum = "Route53Domains_v20140515.GetDomainSuggestions"
)

type GetDomainSuggestionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDomainSuggestionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDomainSuggestionsRequest struct {
	Headers GetDomainSuggestionsHeaders
	Request shared.GetDomainSuggestionsRequest `request:"mediaType=application/json"`
}

type GetDomainSuggestionsResponse struct {
	ContentType                  string
	GetDomainSuggestionsResponse *shared.GetDomainSuggestionsResponse
	InvalidInput                 *interface{}
	StatusCode                   int64
	UnsupportedTld               *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type ListDomainsQueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListDomainsXAmzTargetEnum string

const (
	ListDomainsXAmzTargetEnumRoute53DomainsV20140515ListDomains ListDomainsXAmzTargetEnum = "Route53Domains_v20140515.ListDomains"
)

type ListDomainsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDomainsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDomainsRequest struct {
	QueryParams ListDomainsQueryParams
	Headers     ListDomainsHeaders
	Request     shared.ListDomainsRequest `request:"mediaType=application/json"`
}

type ListDomainsResponse struct {
	ContentType         string
	InvalidInput        *interface{}
	ListDomainsResponse *shared.ListDomainsResponse
	StatusCode          int64
}

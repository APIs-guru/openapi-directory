package operations

import (
	"openapi/pkg/models/shared"
)

type ListDomainsQueryParams struct {
	MaximumPageSize *string `queryParam:"style=form,explode=true,name=maximumPageSize"`
	NextPageToken   *string `queryParam:"style=form,explode=true,name=nextPageToken"`
}

type ListDomainsXAmzTargetEnum string

const (
	ListDomainsXAmzTargetEnumSimpleWorkflowServiceListDomains ListDomainsXAmzTargetEnum = "SimpleWorkflowService.ListDomains"
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
	Request     shared.ListDomainsInput `request:"mediaType=application/json"`
}

type ListDomainsResponse struct {
	ContentType                string
	DomainInfos                *shared.DomainInfos
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
}

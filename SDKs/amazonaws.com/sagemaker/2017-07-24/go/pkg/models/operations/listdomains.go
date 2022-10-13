package operations

import (
	"openapi/pkg/models/shared"
)

type ListDomainsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDomainsXAmzTargetEnum string

const (
	ListDomainsXAmzTargetEnumSageMakerListDomains ListDomainsXAmzTargetEnum = "SageMaker.ListDomains"
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
	ListDomainsResponse *shared.ListDomainsResponse
	StatusCode          int64
}

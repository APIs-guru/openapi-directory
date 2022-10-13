package operations

import (
	"openapi/pkg/models/shared"
)

type ListDomainsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDomainsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDomainsRequestBody struct {
	FleetArn   string  `json:"FleetArn"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}

type ListDomainsRequest struct {
	QueryParams ListDomainsQueryParams
	Headers     ListDomainsHeaders
	Request     ListDomainsRequestBody `request:"mediaType=application/json"`
}

type ListDomainsResponse struct {
	ContentType                  string
	InternalServerErrorException *interface{}
	InvalidRequestException      *interface{}
	ListDomainsResponse          *shared.ListDomainsResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type ListEulaAcceptancesPathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type ListEulaAcceptancesQueryParams struct {
	EulaIds   []string `queryParam:"style=form,explode=true,name=eulaIds"`
	NextToken *string  `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListEulaAcceptancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListEulaAcceptancesRequest struct {
	PathParams  ListEulaAcceptancesPathParams
	QueryParams ListEulaAcceptancesQueryParams
	Headers     ListEulaAcceptancesHeaders
}

type ListEulaAcceptancesResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerErrorException  *interface{}
	ListEulaAcceptancesResponse   *shared.ListEulaAcceptancesResponse
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

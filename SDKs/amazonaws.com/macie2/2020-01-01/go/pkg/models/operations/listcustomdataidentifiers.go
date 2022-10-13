package operations

import (
	"openapi/pkg/models/shared"
)

type ListCustomDataIdentifiersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListCustomDataIdentifiersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListCustomDataIdentifiersRequestBody struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}

type ListCustomDataIdentifiersRequest struct {
	QueryParams ListCustomDataIdentifiersQueryParams
	Headers     ListCustomDataIdentifiersHeaders
	Request     ListCustomDataIdentifiersRequestBody `request:"mediaType=application/json"`
}

type ListCustomDataIdentifiersResponse struct {
	AccessDeniedException             *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	InternalServerException           *interface{}
	ListCustomDataIdentifiersResponse *shared.ListCustomDataIdentifiersResponse
	ResourceNotFoundException         *interface{}
	ServiceQuotaExceededException     *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	ValidationException               *interface{}
}

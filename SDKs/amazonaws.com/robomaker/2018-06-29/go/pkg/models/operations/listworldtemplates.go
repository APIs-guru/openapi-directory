package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorldTemplatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListWorldTemplatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListWorldTemplatesRequestBody struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}

type ListWorldTemplatesRequest struct {
	QueryParams ListWorldTemplatesQueryParams
	Headers     ListWorldTemplatesHeaders
	Request     ListWorldTemplatesRequestBody `request:"mediaType=application/json"`
}

type ListWorldTemplatesResponse struct {
	ContentType                string
	InternalServerException    *interface{}
	InvalidParameterException  *interface{}
	ListWorldTemplatesResponse *shared.ListWorldTemplatesResponse
	StatusCode                 int64
	ThrottlingException        *interface{}
}

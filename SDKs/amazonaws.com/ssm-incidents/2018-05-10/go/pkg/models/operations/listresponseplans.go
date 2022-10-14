package operations

import (
	"openapi/pkg/models/shared"
)

type ListResponsePlansQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListResponsePlansHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListResponsePlansRequestBody struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}

type ListResponsePlansRequest struct {
	QueryParams ListResponsePlansQueryParams
	Headers     ListResponsePlansHeaders
	Request     ListResponsePlansRequestBody `request:"mediaType=application/json"`
}

type ListResponsePlansResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListResponsePlansOutput *shared.ListResponsePlansOutput
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}

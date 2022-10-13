package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcePoliciesQueryParams struct {
	MaxResults  *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken   *string `queryParam:"style=form,explode=true,name=nextToken"`
	ResourceArn string  `queryParam:"style=form,explode=true,name=resourceArn"`
}

type GetResourcePoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetResourcePoliciesRequestBody struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}

type GetResourcePoliciesRequest struct {
	QueryParams GetResourcePoliciesQueryParams
	Headers     GetResourcePoliciesHeaders
	Request     GetResourcePoliciesRequestBody `request:"mediaType=application/json"`
}

type GetResourcePoliciesResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetResourcePoliciesOutput *shared.GetResourcePoliciesOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcePoliciesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
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
	MaxResults   *int64   `json:"maxResults,omitempty"`
	NextToken    *string  `json:"nextToken,omitempty"`
	Principal    *string  `json:"principal,omitempty"`
	ResourceArns []string `json:"resourceArns"`
}

type GetResourcePoliciesRequest struct {
	QueryParams GetResourcePoliciesQueryParams
	Headers     GetResourcePoliciesHeaders
	Request     GetResourcePoliciesRequestBody `request:"mediaType=application/json"`
}

type GetResourcePoliciesResponse struct {
	ContentType                  string
	GetResourcePoliciesResponse  *shared.GetResourcePoliciesResponse
	InvalidNextTokenException    *interface{}
	InvalidParameterException    *interface{}
	MalformedArnException        *interface{}
	ResourceArnNotFoundException *interface{}
	ServerInternalException      *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
}

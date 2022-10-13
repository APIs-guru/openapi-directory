package operations

import (
	"openapi/pkg/models/shared"
)

type GetPolicyPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type GetPolicyQueryParams struct {
	Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
}

type GetPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPolicyRequest struct {
	PathParams  GetPolicyPathParams
	QueryParams GetPolicyQueryParams
	Headers     GetPolicyHeaders
}

type GetPolicyResponse struct {
	ContentType                    string
	GetPolicyResponse              *shared.GetPolicyResponse
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}

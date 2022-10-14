package operations

import (
	"openapi/pkg/models/shared"
)

type GetCanaryRunsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetCanaryRunsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetCanaryRunsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCanaryRunsRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type GetCanaryRunsRequest struct {
	PathParams  GetCanaryRunsPathParams
	QueryParams GetCanaryRunsQueryParams
	Headers     GetCanaryRunsHeaders
	Request     GetCanaryRunsRequestBody `request:"mediaType=application/json"`
}

type GetCanaryRunsResponse struct {
	ContentType               string
	GetCanaryRunsResponse     *shared.GetCanaryRunsResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGroupsRequestBody struct {
	NextToken *string `json:"NextToken"`
}

type GetGroupsRequest struct {
	QueryParams GetGroupsQueryParams
	Headers     GetGroupsHeaders
	Request     GetGroupsRequestBody `request:"mediaType=application/json"`
}

type GetGroupsResponse struct {
	ContentType             string
	GetGroupsResult         *shared.GetGroupsResult
	InvalidRequestException *interface{}
	StatusCode              int64
	ThrottledException      *interface{}
}

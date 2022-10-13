package operations

import (
	"openapi/pkg/models/shared"
)

type ListBotAliasesPathParams struct {
	BotID string `pathParam:"style=simple,explode=false,name=botId"`
}

type ListBotAliasesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBotAliasesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListBotAliasesRequestBody struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}

type ListBotAliasesRequest struct {
	PathParams  ListBotAliasesPathParams
	QueryParams ListBotAliasesQueryParams
	Headers     ListBotAliasesHeaders
	Request     ListBotAliasesRequestBody `request:"mediaType=application/json"`
}

type ListBotAliasesResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	ListBotAliasesResponse        *shared.ListBotAliasesResponse
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

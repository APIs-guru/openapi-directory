package operations

import (
	"openapi/pkg/models/shared"
)

type GetBotChannelAssociationsPathParams struct {
	AliasName string `pathParam:"style=simple,explode=false,name=aliasName"`
	BotName   string `pathParam:"style=simple,explode=false,name=botName"`
}

type GetBotChannelAssociationsQueryParams struct {
	MaxResults   *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NameContains *string `queryParam:"style=form,explode=true,name=nameContains"`
	NextToken    *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetBotChannelAssociationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetBotChannelAssociationsRequest struct {
	PathParams  GetBotChannelAssociationsPathParams
	QueryParams GetBotChannelAssociationsQueryParams
	Headers     GetBotChannelAssociationsHeaders
}

type GetBotChannelAssociationsResponse struct {
	BadRequestException               *interface{}
	ContentType                       string
	GetBotChannelAssociationsResponse *shared.GetBotChannelAssociationsResponse
	InternalFailureException          *interface{}
	LimitExceededException            *interface{}
	StatusCode                        int64
}

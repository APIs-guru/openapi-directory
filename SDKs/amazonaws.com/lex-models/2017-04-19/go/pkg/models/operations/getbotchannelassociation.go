package operations

import (
	"openapi/pkg/models/shared"
)

type GetBotChannelAssociationPathParams struct {
	AliasName string `pathParam:"style=simple,explode=false,name=aliasName"`
	BotName   string `pathParam:"style=simple,explode=false,name=botName"`
	Name      string `pathParam:"style=simple,explode=false,name=name"`
}

type GetBotChannelAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBotChannelAssociationRequest struct {
	PathParams GetBotChannelAssociationPathParams
	Headers    GetBotChannelAssociationHeaders
}

type GetBotChannelAssociationResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	GetBotChannelAssociationResponse *shared.GetBotChannelAssociationResponse
	InternalFailureException         *interface{}
	LimitExceededException           *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
}

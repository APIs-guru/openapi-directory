package operations

type DeleteBotChannelAssociationPathParams struct {
	AliasName string `pathParam:"style=simple,explode=false,name=aliasName"`
	BotName   string `pathParam:"style=simple,explode=false,name=botName"`
	Name      string `pathParam:"style=simple,explode=false,name=name"`
}

type DeleteBotChannelAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteBotChannelAssociationRequest struct {
	PathParams DeleteBotChannelAssociationPathParams
	Headers    DeleteBotChannelAssociationHeaders
}

type DeleteBotChannelAssociationResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}

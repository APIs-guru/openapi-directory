package operations

type DeleteUtterancesPathParams struct {
	BotName string `pathParam:"style=simple,explode=false,name=botName"`
	UserID  string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteUtterancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteUtterancesRequest struct {
	PathParams DeleteUtterancesPathParams
	Headers    DeleteUtterancesHeaders
}

type DeleteUtterancesResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}

package operations

type ReactionsDeletePathParams struct {
	ReactionID int64 `pathParam:"style=simple,explode=false,name=reaction_id"`
}

type ReactionsDeleteHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type ReactionsDeleteRequest struct {
	PathParams ReactionsDeletePathParams
	Headers    ReactionsDeleteHeaders
}

type ReactionsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}

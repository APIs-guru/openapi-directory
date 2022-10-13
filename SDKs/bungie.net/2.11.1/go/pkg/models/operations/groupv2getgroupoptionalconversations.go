package operations

type GroupV2GetGroupOptionalConversationsPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupV2GetGroupOptionalConversationsRequest struct {
	PathParams GroupV2GetGroupOptionalConversationsPathParams
}

type GroupV2GetGroupOptionalConversationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

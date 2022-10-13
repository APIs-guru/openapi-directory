package operations

type ForumGetTopicForContentPathParams struct {
	ContentID int64 `pathParam:"style=simple,explode=false,name=contentId"`
}

type ForumGetTopicForContentRequest struct {
	PathParams ForumGetTopicForContentPathParams
}

type ForumGetTopicForContentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

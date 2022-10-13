package operations

type CommunityContentGetCommunityContentPathParams struct {
	MediaFilter int32 `pathParam:"style=simple,explode=false,name=mediaFilter"`
	Page        int32 `pathParam:"style=simple,explode=false,name=page"`
	Sort        int64 `pathParam:"style=simple,explode=false,name=sort"`
}

type CommunityContentGetCommunityContentRequest struct {
	PathParams CommunityContentGetCommunityContentPathParams
}

type CommunityContentGetCommunityContentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

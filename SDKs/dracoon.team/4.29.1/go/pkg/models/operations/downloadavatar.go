package operations

type DownloadAvatarPathParams struct {
	UserID int64  `pathParam:"style=simple,explode=false,name=user_id"`
	UUID   string `pathParam:"style=simple,explode=false,name=uuid"`
}

type DownloadAvatarRequest struct {
	PathParams DownloadAvatarPathParams
}

type DownloadAvatarResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

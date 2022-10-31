package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoPathParams struct {
	ID interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type GetVideoRequest struct {
	PathParams GetVideoPathParams
}

type GetVideoResponse struct {
	ContentType  string
	StatusCode   int64
	VideoDetails *shared.VideoDetails
}

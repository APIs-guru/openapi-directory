package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=productId"`
}

type GetTagsRequest struct {
	PathParams GetTagsPathParams
}

type GetTagsResponse struct {
	ContentType      string
	StatusCode       int64
	TagModelHaljsons []shared.TagModelHaljson
	TagModels        []shared.TagModel
}

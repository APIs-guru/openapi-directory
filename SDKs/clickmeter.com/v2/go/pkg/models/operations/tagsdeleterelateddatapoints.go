package operations

import (
	"openapi/pkg/models/shared"
)

type TagsDeleteRelatedDatapointsPathParams struct {
	TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
}

type TagsDeleteRelatedDatapointsRequest struct {
	PathParams TagsDeleteRelatedDatapointsPathParams
}

type TagsDeleteRelatedDatapointsResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}

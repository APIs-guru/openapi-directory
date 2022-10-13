package operations

import (
	"openapi/pkg/models/shared"
)

type TagsPatchDataPointPathParams struct {
	TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
}

type TagsPatchDataPointRequests struct {
	APICoreRequestsPatchBody  *shared.APICoreRequestsPatchBody `request:"mediaType=application/json"`
	APICoreRequestsPatchBody1 *shared.APICoreRequestsPatchBody `request:"mediaType=application/x-www-form-urlencoded"`
	APICoreRequestsPatchBody2 *shared.APICoreRequestsPatchBody `request:"mediaType=text/json"`
	ApplicationXML            []byte                           `request:"mediaType=application/xml"`
	TextXML                   []byte                           `request:"mediaType=text/xml"`
}

type TagsPatchDataPointRequest struct {
	PathParams TagsPatchDataPointPathParams
	Request    TagsPatchDataPointRequests
}

type TagsPatchDataPointResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}

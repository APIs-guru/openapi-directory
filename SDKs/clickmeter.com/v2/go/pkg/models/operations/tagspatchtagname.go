package operations

import (
	"openapi/pkg/models/shared"
)

type TagsPatchTagNamePathParams struct {
	TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
}

type TagsPatchTagNameRequests struct {
	APICoreRequestsGenericTextPatch  *shared.APICoreRequestsGenericTextPatch `request:"mediaType=application/json"`
	APICoreRequestsGenericTextPatch1 *shared.APICoreRequestsGenericTextPatch `request:"mediaType=application/x-www-form-urlencoded"`
	APICoreRequestsGenericTextPatch2 *shared.APICoreRequestsGenericTextPatch `request:"mediaType=text/json"`
	ApplicationXML                   []byte                                  `request:"mediaType=application/xml"`
	TextXML                          []byte                                  `request:"mediaType=text/xml"`
}

type TagsPatchTagNameRequest struct {
	PathParams TagsPatchTagNamePathParams
	Request    TagsPatchTagNameRequests
}

type TagsPatchTagNameResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}

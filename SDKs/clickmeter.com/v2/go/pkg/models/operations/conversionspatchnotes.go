package operations

import (
	"openapi/pkg/models/shared"
)

type ConversionsPatchNotesPathParams struct {
	ConversionID int64 `pathParam:"style=simple,explode=false,name=conversionId"`
}

type ConversionsPatchNotesRequests struct {
	APICoreRequestsGenericTextPatch  *shared.APICoreRequestsGenericTextPatch `request:"mediaType=application/json"`
	APICoreRequestsGenericTextPatch1 *shared.APICoreRequestsGenericTextPatch `request:"mediaType=application/x-www-form-urlencoded"`
	APICoreRequestsGenericTextPatch2 *shared.APICoreRequestsGenericTextPatch `request:"mediaType=text/json"`
	ApplicationXML                   []byte                                  `request:"mediaType=application/xml"`
	TextXML                          []byte                                  `request:"mediaType=text/xml"`
}

type ConversionsPatchNotesRequest struct {
	PathParams ConversionsPatchNotesPathParams
	Request    ConversionsPatchNotesRequests
}

type ConversionsPatchNotesResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}

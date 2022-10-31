package operations

import (
	"openapi/pkg/models/shared"
)

type ConversionsPutRequests struct {
	APICoreDtoConversionsConversion  *shared.APICoreDtoConversionsConversion `request:"mediaType=application/json"`
	APICoreDtoConversionsConversion1 *shared.APICoreDtoConversionsConversion `request:"mediaType=application/x-www-form-urlencoded"`
	APICoreDtoConversionsConversion2 *shared.APICoreDtoConversionsConversion `request:"mediaType=text/json"`
	ApplicationXML                   []byte                                  `request:"mediaType=application/xml"`
	TextXML                          []byte                                  `request:"mediaType=text/xml"`
}

type ConversionsPutRequest struct {
	Request ConversionsPutRequests
}

type ConversionsPutResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}

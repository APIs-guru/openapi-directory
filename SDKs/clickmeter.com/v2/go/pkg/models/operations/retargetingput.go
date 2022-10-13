package operations

import (
	"openapi/pkg/models/shared"
)

type RetargetingPutRequests struct {
	APICoreDtoRetargetingRetargetingScript  *shared.APICoreDtoRetargetingRetargetingScript `request:"mediaType=application/json"`
	APICoreDtoRetargetingRetargetingScript1 *shared.APICoreDtoRetargetingRetargetingScript `request:"mediaType=application/x-www-form-urlencoded"`
	APICoreDtoRetargetingRetargetingScript2 *shared.APICoreDtoRetargetingRetargetingScript `request:"mediaType=text/json"`
	ApplicationXML                          []byte                                         `request:"mediaType=application/xml"`
	TextXML                                 []byte                                         `request:"mediaType=text/xml"`
}

type RetargetingPutRequest struct {
	Request RetargetingPutRequests
}

type RetargetingPutResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}

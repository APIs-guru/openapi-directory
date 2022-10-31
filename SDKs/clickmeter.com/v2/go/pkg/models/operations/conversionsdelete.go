package operations

import (
	"openapi/pkg/models/shared"
)

type ConversionsDeletePathParams struct {
	ConversionID int64 `pathParam:"style=simple,explode=false,name=conversionId"`
}

type ConversionsDeleteRequest struct {
	PathParams ConversionsDeletePathParams
}

type ConversionsDeleteResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetV4LayersAsHarvestedActivityIDContentsPathParams struct {
	ActivityID string `pathParam:"style=simple,explode=false,name=activityId"`
}

type GetV4LayersAsHarvestedActivityIDContentsHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
	Range  string `header:"style=simple,explode=false,name=Range"`
}

type GetV4LayersAsHarvestedActivityIDContentsSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersAsHarvestedActivityIDContentsRequest struct {
	PathParams GetV4LayersAsHarvestedActivityIDContentsPathParams
	Headers    GetV4LayersAsHarvestedActivityIDContentsHeaders
	Security   GetV4LayersAsHarvestedActivityIDContentsSecurity
}

type GetV4LayersAsHarvestedActivityIDContentsResponse struct {
	Body        []byte
	ContentType string
	Empty       map[string]interface{}
	Error       *shared.Error
	Headers     map[string][]string
	StatusCode  int64
}

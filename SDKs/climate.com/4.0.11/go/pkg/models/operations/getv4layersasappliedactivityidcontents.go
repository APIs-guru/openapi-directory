package operations

import (
	"openapi/pkg/models/shared"
)

type GetV4LayersAsAppliedActivityIDContentsPathParams struct {
	ActivityID string `pathParam:"style=simple,explode=false,name=activityId"`
}

type GetV4LayersAsAppliedActivityIDContentsHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
	Range  string `header:"style=simple,explode=false,name=Range"`
}

type GetV4LayersAsAppliedActivityIDContentsSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersAsAppliedActivityIDContentsRequest struct {
	PathParams GetV4LayersAsAppliedActivityIDContentsPathParams
	Headers    GetV4LayersAsAppliedActivityIDContentsHeaders
	Security   GetV4LayersAsAppliedActivityIDContentsSecurity
}

type GetV4LayersAsAppliedActivityIDContentsResponse struct {
	Body        []byte
	ContentType string
	Empty       map[string]interface{}
	Error       *shared.Error
	Headers     map[string][]string
	StatusCode  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetV4LayersAsPlantedActivityIDContentsPathParams struct {
	ActivityID string `pathParam:"style=simple,explode=false,name=activityId"`
}

type GetV4LayersAsPlantedActivityIDContentsHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
	Range  string `header:"style=simple,explode=false,name=Range"`
}

type GetV4LayersAsPlantedActivityIDContentsSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersAsPlantedActivityIDContentsRequest struct {
	PathParams GetV4LayersAsPlantedActivityIDContentsPathParams
	Headers    GetV4LayersAsPlantedActivityIDContentsHeaders
	Security   GetV4LayersAsPlantedActivityIDContentsSecurity
}

type GetV4LayersAsPlantedActivityIDContentsResponse struct {
	Body        []byte
	ContentType string
	Empty       map[string]interface{}
	Error       *shared.Error
	Headers     map[string][]string
	StatusCode  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetV4LayersAsPlantedActivityIDContentsPathParams struct {
	ActivityID string `pathParam:"style=simple,explode=false,name=activityId"`
}

type GetV4LayersAsPlantedActivityIDContentsHeaders struct {
	Accept string `header:"name=Accept"`
	Range  string `header:"name=Range"`
}

type GetV4LayersAsPlantedActivityIDContentsSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetV4LayersAsPlantedActivityIDContentsSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersAsPlantedActivityIDContentsSecurity struct {
	Option1 *GetV4LayersAsPlantedActivityIDContentsSecurityOption1 `security:"option"`
	Option2 *GetV4LayersAsPlantedActivityIDContentsSecurityOption2 `security:"option"`
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

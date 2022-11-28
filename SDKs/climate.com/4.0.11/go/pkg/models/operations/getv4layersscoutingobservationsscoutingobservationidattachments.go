package operations

import (
	"openapi/pkg/models/shared"
)

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsPathParams struct {
	ScoutingObservationID string `pathParam:"style=simple,explode=false,name=scoutingObservationId"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsHeaders struct {
	XLimit     *int32  `header:"style=simple,explode=false,name=X-Limit"`
	XNextToken *string `header:"style=simple,explode=false,name=X-Next-Token"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsRequest struct {
	PathParams GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsPathParams
	Headers    GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsHeaders
	Security   GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurity
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsResponse struct {
	ContentType                    string
	Empty                          map[string]interface{}
	Error                          *shared.Error
	Headers                        map[string][]string
	ScoutingObservationAttachments *interface{}
	StatusCode                     int64
}

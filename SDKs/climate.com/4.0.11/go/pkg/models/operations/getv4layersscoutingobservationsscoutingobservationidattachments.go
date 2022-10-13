package operations

import (
	"openapi/pkg/models/shared"
)

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsPathParams struct {
	ScoutingObservationID string `pathParam:"style=simple,explode=false,name=scoutingObservationId"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsHeaders struct {
	XLimit     *int32  `header:"name=X-Limit"`
	XNextToken *string `header:"name=X-Next-Token"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurity struct {
	Option1 *GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurityOption1 `security:"option"`
	Option2 *GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurityOption2 `security:"option"`
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

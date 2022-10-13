package operations

import (
	"openapi/pkg/models/shared"
)

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsPathParams struct {
	AttachmentID          string `pathParam:"style=simple,explode=false,name=attachmentId"`
	ScoutingObservationID string `pathParam:"style=simple,explode=false,name=scoutingObservationId"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsHeaders struct {
	Accept string `header:"name=Accept"`
	Range  string `header:"name=Range"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurity struct {
	Option1 *GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurityOption1 `security:"option"`
	Option2 *GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurityOption2 `security:"option"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsRequest struct {
	PathParams GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsPathParams
	Headers    GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsHeaders
	Security   GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurity
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsResponse struct {
	Body        []byte
	ContentType string
	Error       *shared.Error
	Headers     map[string][]string
	StatusCode  int64
}

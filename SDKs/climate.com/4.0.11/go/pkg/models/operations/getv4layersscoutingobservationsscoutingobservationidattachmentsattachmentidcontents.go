package operations

import (
	"openapi/pkg/models/shared"
)

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsPathParams struct {
	AttachmentID          string `pathParam:"style=simple,explode=false,name=attachmentId"`
	ScoutingObservationID string `pathParam:"style=simple,explode=false,name=scoutingObservationId"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
	Range  string `header:"style=simple,explode=false,name=Range"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
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

package operations

import (
	"openapi/pkg/models/shared"
)

type GetV4LayersScoutingObservationsScoutingObservationIDPathParams struct {
	ScoutingObservationID string `pathParam:"style=simple,explode=false,name=scoutingObservationId"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersScoutingObservationsScoutingObservationIDRequest struct {
	PathParams GetV4LayersScoutingObservationsScoutingObservationIDPathParams
	Security   GetV4LayersScoutingObservationsScoutingObservationIDSecurity
}

type GetV4LayersScoutingObservationsScoutingObservationIDResponse struct {
	ContentType         string
	Error               *shared.Error
	Headers             map[string][]string
	ScoutingObservation *shared.ScoutingObservation
	StatusCode          int64
}

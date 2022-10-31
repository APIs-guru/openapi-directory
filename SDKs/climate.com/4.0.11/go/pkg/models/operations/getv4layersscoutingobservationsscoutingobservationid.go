package operations

import (
"openapi/pkg/models/shared")

type GetV4LayersScoutingObservationsScoutingObservationIDPathParams struct {
    ScoutingObservationID string `pathParam:"style=simple,explode=false,name=scoutingObservationId"`
    
}

type GetV4LayersScoutingObservationsScoutingObservationIDSecurityOption1 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetV4LayersScoutingObservationsScoutingObservationIDSecurityOption2 struct {
    Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
    
}

type GetV4LayersScoutingObservationsScoutingObservationIDSecurity struct {
    Option1 *GetV4LayersScoutingObservationsScoutingObservationIDSecurityOption1 `security:"option"`
    Option2 *GetV4LayersScoutingObservationsScoutingObservationIDSecurityOption2 `security:"option"`
    
}

type GetV4LayersScoutingObservationsScoutingObservationIDRequest struct {
    PathParams GetV4LayersScoutingObservationsScoutingObservationIDPathParams 
    Security GetV4LayersScoutingObservationsScoutingObservationIDSecurity 
    
}

type GetV4LayersScoutingObservationsScoutingObservationIDResponse struct {
    ContentType string 
    Error *shared.Error 
    Headers map[string][]string 
    ScoutingObservation *shared.ScoutingObservation 
    StatusCode int64 
    
}


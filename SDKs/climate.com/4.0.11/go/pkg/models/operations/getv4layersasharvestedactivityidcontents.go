package operations

import (
"openapi/pkg/models/shared")

type GetV4LayersAsHarvestedActivityIDContentsPathParams struct {
    ActivityID string `pathParam:"style=simple,explode=false,name=activityId"`
    
}

type GetV4LayersAsHarvestedActivityIDContentsHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    Range string `header:"style=simple,explode=false,name=Range"`
    
}

type GetV4LayersAsHarvestedActivityIDContentsSecurityOption1 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetV4LayersAsHarvestedActivityIDContentsSecurityOption2 struct {
    Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
    
}

type GetV4LayersAsHarvestedActivityIDContentsSecurity struct {
    Option1 *GetV4LayersAsHarvestedActivityIDContentsSecurityOption1 `security:"option"`
    Option2 *GetV4LayersAsHarvestedActivityIDContentsSecurityOption2 `security:"option"`
    
}

type GetV4LayersAsHarvestedActivityIDContentsRequest struct {
    PathParams GetV4LayersAsHarvestedActivityIDContentsPathParams 
    Headers GetV4LayersAsHarvestedActivityIDContentsHeaders 
    Security GetV4LayersAsHarvestedActivityIDContentsSecurity 
    
}

type GetV4LayersAsHarvestedActivityIDContentsResponse struct {
    Body []byte 
    ContentType string 
    Empty map[string]interface{} 
    Error *shared.Error 
    Headers map[string][]string 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type GetPendingParticipantsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPendingParticipantsQueryParams struct {
    NumberOfResults *float64 `queryParam:"style=form,explode=true,name=numberOfResults"`
    SearchPointer *string `queryParam:"style=form,explode=true,name=searchPointer"`
    
}

type GetPendingParticipantsSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetPendingParticipantsRequest struct {
    PathParams GetPendingParticipantsPathParams 
    QueryParams GetPendingParticipantsQueryParams 
    Security GetPendingParticipantsSecurity 
    
}

type GetPendingParticipantsResponse struct {
    Body []byte 
    ContentType string 
    ParticipantsSearchResult *interface{} 
    StatusCode int64 
    
}


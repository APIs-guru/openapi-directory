package operations

import (
"openapi/pkg/models/shared")

type SearchSpaceParticipantsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type SearchSpaceParticipantsQueryParams struct {
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type SearchSpaceParticipantsSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type SearchSpaceParticipantsRequest struct {
    PathParams SearchSpaceParticipantsPathParams 
    QueryParams SearchSpaceParticipantsQueryParams 
    Security SearchSpaceParticipantsSecurity 
    
}

type SearchSpaceParticipantsResponse struct {
    Body []byte 
    ContentType string 
    ParticipantsSearchResultLarges []interface{} 
    StatusCode int64 
    
}


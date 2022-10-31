package operations

import (
"openapi/pkg/models/shared")

type SearchParticipantsToAddPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type SearchParticipantsToAddQueryParams struct {
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type SearchParticipantsToAddSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type SearchParticipantsToAddRequest struct {
    PathParams SearchParticipantsToAddPathParams 
    QueryParams SearchParticipantsToAddQueryParams 
    Security SearchParticipantsToAddSecurity 
    
}

type SearchParticipantsToAddResponse struct {
    AddParticipantsSearchResults []interface{} 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


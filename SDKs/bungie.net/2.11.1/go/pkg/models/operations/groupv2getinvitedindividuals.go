package operations

import (
"openapi/pkg/models/shared")

type GroupV2GetInvitedIndividualsPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type GroupV2GetInvitedIndividualsQueryParams struct {
    Currentpage int32 `queryParam:"style=form,explode=true,name=currentpage"`
    
}

type GroupV2GetInvitedIndividualsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GroupV2GetInvitedIndividualsRequest struct {
    PathParams GroupV2GetInvitedIndividualsPathParams 
    QueryParams GroupV2GetInvitedIndividualsQueryParams 
    Security GroupV2GetInvitedIndividualsSecurity 
    
}

type GroupV2GetInvitedIndividualsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherEditsListingsPatchPathParams struct {
    EditID string `pathParam:"style=simple,explode=false,name=editId"`
    Language string `pathParam:"style=simple,explode=false,name=language"`
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherEditsListingsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherEditsListingsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherEditsListingsPatchRequest struct {
    PathParams AndroidpublisherEditsListingsPatchPathParams 
    QueryParams AndroidpublisherEditsListingsPatchQueryParams 
    Request *shared.Listing `request:"mediaType=application/json"`
    Security AndroidpublisherEditsListingsPatchSecurity 
    
}

type AndroidpublisherEditsListingsPatchResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


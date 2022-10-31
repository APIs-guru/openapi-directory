package operations

import (
"openapi/pkg/models/shared")

type AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Etag *string `queryParam:"style=form,explode=true,name=etag"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest struct {
    PathParams AssuredworkloadsOrganizationsLocationsWorkloadsDeletePathParams 
    QueryParams AssuredworkloadsOrganizationsLocationsWorkloadsDeleteQueryParams 
    Security AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity 
    
}

type AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse struct {
    ContentType string 
    GoogleProtobufEmpty map[string]interface{} 
    StatusCode int64 
    
}


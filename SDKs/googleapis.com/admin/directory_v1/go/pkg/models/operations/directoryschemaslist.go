package operations

import (
"openapi/pkg/models/shared")

type DirectorySchemasListPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    
}

type DirectorySchemasListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DirectorySchemasListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectorySchemasListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectorySchemasListSecurity struct {
    Option1 *DirectorySchemasListSecurityOption1 `security:"option"`
    Option2 *DirectorySchemasListSecurityOption2 `security:"option"`
    
}

type DirectorySchemasListRequest struct {
    PathParams DirectorySchemasListPathParams 
    QueryParams DirectorySchemasListQueryParams 
    Security DirectorySchemasListSecurity 
    
}

type DirectorySchemasListResponse struct {
    ContentType string 
    Schemas *shared.Schemas 
    StatusCode int64 
    
}


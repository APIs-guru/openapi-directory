package operations

import (
"openapi/pkg/models/shared")

type Adexchangebuyer2AccountsCreativesUpdatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    CreativeID string `pathParam:"style=simple,explode=false,name=creativeId"`
    
}

type Adexchangebuyer2AccountsCreativesUpdateQueryParams struct {
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

type Adexchangebuyer2AccountsCreativesUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Adexchangebuyer2AccountsCreativesUpdateRequest struct {
    PathParams Adexchangebuyer2AccountsCreativesUpdatePathParams 
    QueryParams Adexchangebuyer2AccountsCreativesUpdateQueryParams 
    Request *shared.Creative `request:"mediaType=application/json"`
    Security Adexchangebuyer2AccountsCreativesUpdateSecurity 
    
}

type Adexchangebuyer2AccountsCreativesUpdateResponse struct {
    ContentType string 
    Creative *shared.Creative 
    StatusCode int64 
    
}


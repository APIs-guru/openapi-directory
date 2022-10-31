package operations

import (
"openapi/pkg/models/shared")

type Adexchangebuyer2AccountsClientsUpdatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ClientAccountID string `pathParam:"style=simple,explode=false,name=clientAccountId"`
    
}

type Adexchangebuyer2AccountsClientsUpdateQueryParams struct {
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

type Adexchangebuyer2AccountsClientsUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Adexchangebuyer2AccountsClientsUpdateRequest struct {
    PathParams Adexchangebuyer2AccountsClientsUpdatePathParams 
    QueryParams Adexchangebuyer2AccountsClientsUpdateQueryParams 
    Request *shared.Client `request:"mediaType=application/json"`
    Security Adexchangebuyer2AccountsClientsUpdateSecurity 
    
}

type Adexchangebuyer2AccountsClientsUpdateResponse struct {
    Client *shared.Client 
    ContentType string 
    StatusCode int64 
    
}


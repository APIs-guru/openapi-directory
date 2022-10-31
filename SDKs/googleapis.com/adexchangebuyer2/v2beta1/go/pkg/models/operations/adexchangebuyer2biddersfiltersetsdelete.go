package operations

import (
"openapi/pkg/models/shared")

type Adexchangebuyer2BiddersFilterSetsDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type Adexchangebuyer2BiddersFilterSetsDeleteQueryParams struct {
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

type Adexchangebuyer2BiddersFilterSetsDeleteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Adexchangebuyer2BiddersFilterSetsDeleteRequest struct {
    PathParams Adexchangebuyer2BiddersFilterSetsDeletePathParams 
    QueryParams Adexchangebuyer2BiddersFilterSetsDeleteQueryParams 
    Security Adexchangebuyer2BiddersFilterSetsDeleteSecurity 
    
}

type Adexchangebuyer2BiddersFilterSetsDeleteResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}


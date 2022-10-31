package operations

import (
"openapi/pkg/models/shared")

type Adexchangebuyer2BiddersFilterSetsCreatePathParams struct {
    OwnerName string `pathParam:"style=simple,explode=false,name=ownerName"`
    
}

type Adexchangebuyer2BiddersFilterSetsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IsTransient *bool `queryParam:"style=form,explode=true,name=isTransient"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type Adexchangebuyer2BiddersFilterSetsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Adexchangebuyer2BiddersFilterSetsCreateRequest struct {
    PathParams Adexchangebuyer2BiddersFilterSetsCreatePathParams 
    QueryParams Adexchangebuyer2BiddersFilterSetsCreateQueryParams 
    Request *shared.FilterSet `request:"mediaType=application/json"`
    Security Adexchangebuyer2BiddersFilterSetsCreateSecurity 
    
}

type Adexchangebuyer2BiddersFilterSetsCreateResponse struct {
    ContentType string 
    FilterSet *shared.FilterSet 
    StatusCode int64 
    
}


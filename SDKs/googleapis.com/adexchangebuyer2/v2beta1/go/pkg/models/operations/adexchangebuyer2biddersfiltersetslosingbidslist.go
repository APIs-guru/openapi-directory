package operations

import (
"openapi/pkg/models/shared")

type Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams struct {
    FilterSetName string `pathParam:"style=simple,explode=false,name=filterSetName"`
    
}

type Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest struct {
    PathParams Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams 
    QueryParams Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams 
    Security Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity 
    
}

type Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse struct {
    ContentType string 
    ListLosingBidsResponse *shared.ListLosingBidsResponse 
    StatusCode int64 
    
}


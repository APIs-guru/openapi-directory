package operations

import (
"openapi/pkg/models/shared")

type Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListPathParams struct {
    CreativeStatusID int64 `pathParam:"style=simple,explode=false,name=creativeStatusId"`
    FilterSetName string `pathParam:"style=simple,explode=false,name=filterSetName"`
    
}

type Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListQueryParams struct {
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

type Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest struct {
    PathParams Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListPathParams 
    QueryParams Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListQueryParams 
    Security Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity 
    
}

type Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse struct {
    ContentType string 
    ListCreativeStatusBreakdownByCreativeResponse *shared.ListCreativeStatusBreakdownByCreativeResponse 
    StatusCode int64 
    
}


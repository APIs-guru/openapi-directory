package operations

import (
"openapi/pkg/models/shared")

type AnalyticshubOrganizationsLocationsDataExchangesListPathParams struct {
    Organization string `pathParam:"style=simple,explode=false,name=organization"`
    
}

type AnalyticshubOrganizationsLocationsDataExchangesListQueryParams struct {
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

type AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticshubOrganizationsLocationsDataExchangesListSecurity struct {
    Option1 *AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1 `security:"option"`
    Option2 *AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2 `security:"option"`
    
}

type AnalyticshubOrganizationsLocationsDataExchangesListRequest struct {
    PathParams AnalyticshubOrganizationsLocationsDataExchangesListPathParams 
    QueryParams AnalyticshubOrganizationsLocationsDataExchangesListQueryParams 
    Security AnalyticshubOrganizationsLocationsDataExchangesListSecurity 
    
}

type AnalyticshubOrganizationsLocationsDataExchangesListResponse struct {
    ContentType string 
    ListOrgDataExchangesResponse *shared.ListOrgDataExchangesResponse 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type ApigeeOrganizationsSitesApicategoriesGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type ApigeeOrganizationsSitesApicategoriesGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    EnvgroupHostname *string `queryParam:"style=form,explode=true,name=envgroupHostname"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Format *string `queryParam:"style=form,explode=true,name=format"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Realtime *bool `queryParam:"style=form,explode=true,name=realtime"`
    Select *string `queryParam:"style=form,explode=true,name=select"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Sortby *string `queryParam:"style=form,explode=true,name=sortby"`
    TimeRange *string `queryParam:"style=form,explode=true,name=timeRange"`
    TimeUnit *string `queryParam:"style=form,explode=true,name=timeUnit"`
    Topk *string `queryParam:"style=form,explode=true,name=topk"`
    TsAscending *bool `queryParam:"style=form,explode=true,name=tsAscending"`
    Tzo *string `queryParam:"style=form,explode=true,name=tzo"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ApigeeOrganizationsSitesApicategoriesGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApigeeOrganizationsSitesApicategoriesGetRequest struct {
    PathParams ApigeeOrganizationsSitesApicategoriesGetPathParams 
    QueryParams ApigeeOrganizationsSitesApicategoriesGetQueryParams 
    Security ApigeeOrganizationsSitesApicategoriesGetSecurity 
    
}

type ApigeeOrganizationsSitesApicategoriesGetResponse struct {
    ContentType string 
    GoogleCloudApigeeV1APICategory *shared.GoogleCloudApigeeV1APICategory 
    StatusCode int64 
    
}


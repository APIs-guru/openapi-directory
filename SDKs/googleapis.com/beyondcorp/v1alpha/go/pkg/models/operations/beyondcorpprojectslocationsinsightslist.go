package operations

import (
"openapi/pkg/models/shared")

type BeyondcorpProjectsLocationsInsightsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type BeyondcorpProjectsLocationsInsightsListViewEnum string

const (
    BeyondcorpProjectsLocationsInsightsListViewEnumInsightViewUnspecified BeyondcorpProjectsLocationsInsightsListViewEnum = "INSIGHT_VIEW_UNSPECIFIED"
BeyondcorpProjectsLocationsInsightsListViewEnumBasic BeyondcorpProjectsLocationsInsightsListViewEnum = "BASIC"
BeyondcorpProjectsLocationsInsightsListViewEnumFull BeyondcorpProjectsLocationsInsightsListViewEnum = "FULL"
)


type BeyondcorpProjectsLocationsInsightsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *BeyondcorpProjectsLocationsInsightsListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type BeyondcorpProjectsLocationsInsightsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BeyondcorpProjectsLocationsInsightsListRequest struct {
    PathParams BeyondcorpProjectsLocationsInsightsListPathParams 
    QueryParams BeyondcorpProjectsLocationsInsightsListQueryParams 
    Security BeyondcorpProjectsLocationsInsightsListSecurity 
    
}

type BeyondcorpProjectsLocationsInsightsListResponse struct {
    ContentType string 
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse *shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse 
    StatusCode int64 
    
}


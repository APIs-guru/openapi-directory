package operations

import (
"openapi/pkg/models/shared")


type AnalyticsDataMcfGetSamplingLevelEnum string

const (
    AnalyticsDataMcfGetSamplingLevelEnumDefault AnalyticsDataMcfGetSamplingLevelEnum = "DEFAULT"
AnalyticsDataMcfGetSamplingLevelEnumFaster AnalyticsDataMcfGetSamplingLevelEnum = "FASTER"
AnalyticsDataMcfGetSamplingLevelEnumHigherPrecision AnalyticsDataMcfGetSamplingLevelEnum = "HIGHER_PRECISION"
)


type AnalyticsDataMcfGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Dimensions *string `queryParam:"style=form,explode=true,name=dimensions"`
    EndDate string `queryParam:"style=form,explode=true,name=end-date"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filters *string `queryParam:"style=form,explode=true,name=filters"`
    Ids string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=max-results"`
    Metrics string `queryParam:"style=form,explode=true,name=metrics"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SamplingLevel *AnalyticsDataMcfGetSamplingLevelEnum `queryParam:"style=form,explode=true,name=samplingLevel"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    StartDate string `queryParam:"style=form,explode=true,name=start-date"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=start-index"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsDataMcfGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsDataMcfGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsDataMcfGetSecurity struct {
    Option1 *AnalyticsDataMcfGetSecurityOption1 `security:"option"`
    Option2 *AnalyticsDataMcfGetSecurityOption2 `security:"option"`
    
}

type AnalyticsDataMcfGetRequest struct {
    QueryParams AnalyticsDataMcfGetQueryParams 
    Security AnalyticsDataMcfGetSecurity 
    
}

type AnalyticsDataMcfGetResponse struct {
    ContentType string 
    McfData *shared.McfData 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")


type GetAppConfigIncludeEnum string

const (
    GetAppConfigIncludeEnumClassification GetAppConfigIncludeEnum = "classification"
GetAppConfigIncludeEnumPlayback GetAppConfigIncludeEnum = "playback"
GetAppConfigIncludeEnumSitemap GetAppConfigIncludeEnum = "sitemap"
GetAppConfigIncludeEnumNavigation GetAppConfigIncludeEnum = "navigation"
GetAppConfigIncludeEnumSubscription GetAppConfigIncludeEnum = "subscription"
GetAppConfigIncludeEnumGeneral GetAppConfigIncludeEnum = "general"
GetAppConfigIncludeEnumDisplay GetAppConfigIncludeEnum = "display"
GetAppConfigIncludeEnumI18n GetAppConfigIncludeEnum = "i18n"
GetAppConfigIncludeEnumLinear GetAppConfigIncludeEnum = "linear"
)


type GetAppConfigQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Include []GetAppConfigIncludeEnum `queryParam:"style=form,explode=false,name=include"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    Sub *string `queryParam:"style=form,explode=true,name=sub"`
    System *string `queryParam:"style=form,explode=true,name=system"`
    
}

type GetAppConfigRequest struct {
    QueryParams GetAppConfigQueryParams 
    
}

type GetAppConfigResponse struct {
    AppConfig *shared.AppConfig 
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}


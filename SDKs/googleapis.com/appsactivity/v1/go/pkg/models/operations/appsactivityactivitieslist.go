package operations

import (
"openapi/pkg/models/shared")


type AppsactivityActivitiesListGroupingStrategyEnum string

const (
    AppsactivityActivitiesListGroupingStrategyEnumDriveUI AppsactivityActivitiesListGroupingStrategyEnum = "driveUi"
AppsactivityActivitiesListGroupingStrategyEnumNone AppsactivityActivitiesListGroupingStrategyEnum = "none"
)


type AppsactivityActivitiesListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    DriveAncestorID *string `queryParam:"style=form,explode=true,name=drive.ancestorId"`
    DriveFileID *string `queryParam:"style=form,explode=true,name=drive.fileId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GroupingStrategy *AppsactivityActivitiesListGroupingStrategyEnum `queryParam:"style=form,explode=true,name=groupingStrategy"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AppsactivityActivitiesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppsactivityActivitiesListRequest struct {
    QueryParams AppsactivityActivitiesListQueryParams 
    Security AppsactivityActivitiesListSecurity 
    
}

type AppsactivityActivitiesListResponse struct {
    ContentType string 
    ListActivitiesResponse *shared.ListActivitiesResponse 
    StatusCode int64 
    
}


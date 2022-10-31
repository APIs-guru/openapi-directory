package operations

import (
"openapi/pkg/models/shared")

type Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams struct {
    ActivityID int64 `pathParam:"style=simple,explode=false,name=activityId"`
    
}

type Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type Destiny2ReportOffensivePostGameCarnageReportPlayerRequest struct {
    PathParams Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams 
    Security Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity 
    
}

type Destiny2ReportOffensivePostGameCarnageReportPlayerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


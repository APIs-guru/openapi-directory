package operations

import (
"openapi/pkg/models/shared")


type PostReportsOptionEnum string

const (
    PostReportsOptionEnumValidatePayload PostReportsOptionEnum = "ValidatePayload"
PostReportsOptionEnumCheckConnections PostReportsOptionEnum = "CheckConnections"
PostReportsOptionEnumSendImmediately PostReportsOptionEnum = "SendImmediately"
PostReportsOptionEnumSkipSend PostReportsOptionEnum = "SkipSend"
PostReportsOptionEnumSkipInvalidItems PostReportsOptionEnum = "SkipInvalidItems"
)


type PostReportsQueryParams struct {
    Client string `queryParam:"style=form,explode=true,name=client"`
    Default []string `queryParam:"style=form,explode=false,name=default"`
    Option *PostReportsOptionEnum `queryParam:"style=form,explode=true,name=option"`
    RouteTo []string `queryParam:"style=form,explode=true,name=routeTo"`
    
}

type PostReportsSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostReportsRequest struct {
    QueryParams PostReportsQueryParams 
    Request string `request:"mediaType=text/csv"`
    Security PostReportsSecurity 
    
}

type PostReportsResponse struct {
    ContentType string 
    Report *shared.Report 
    StatusCode int64 
    
}


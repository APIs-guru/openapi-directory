package operations

import (
"openapi/pkg/models/shared")

type GetDataRequestPathParams struct {
    DataRequestID string `pathParam:"style=simple,explode=false,name=data_request_id"`
    
}

type GetDataRequestSecurity struct {
    APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetDataRequestRequest struct {
    PathParams GetDataRequestPathParams 
    Security GetDataRequestSecurity 
    
}

type GetDataRequestResponse struct {
    ContentType string 
    StatusCode int64 
    AuthenticationError *shared.AuthenticationError 
    Error *shared.Error 
    SubmissionDataRequest *shared.SubmissionDataRequest 
    
}


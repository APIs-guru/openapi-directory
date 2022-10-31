package operations

import (
"openapi/pkg/models/shared")

type RequestUserInfoQueryParams struct {
    MoreInfo *bool `queryParam:"style=form,explode=true,name=more_info"`
    
}

type RequestUserInfoHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type RequestUserInfoRequest struct {
    QueryParams RequestUserInfoQueryParams 
    Headers RequestUserInfoHeaders 
    
}

type RequestUserInfoResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UserAccount *shared.UserAccount 
    
}


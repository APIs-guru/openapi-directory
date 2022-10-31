package operations

import (
"openapi/pkg/models/shared")

type RequestAdConfigsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestAdConfigsRequest struct {
    Headers RequestAdConfigsHeaders 
    
}

type RequestAdConfigsResponse struct {
    ActiveDirectoryConfigList *shared.ActiveDirectoryConfigList 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}


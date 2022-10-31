package operations

import (
"openapi/pkg/models/shared")

type WorkTypeAPIUpdateHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type WorkTypeAPIUpdateRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextHTML []byte `request:"mediaType=text/html"`
    TextXML []byte `request:"mediaType=text/xml"`
    WorkTypeUpdateAPIModel *shared.WorkTypeUpdateAPIModel `request:"mediaType=application/json"`
    WorkTypeUpdateAPIModel1 *shared.WorkTypeUpdateAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
    WorkTypeUpdateAPIModel2 *shared.WorkTypeUpdateAPIModel `request:"mediaType=text/json"`
    
}

type WorkTypeAPIUpdateRequest struct {
    Headers WorkTypeAPIUpdateHeaders 
    Request WorkTypeAPIUpdateRequests 
    
}

type WorkTypeAPIUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    
}


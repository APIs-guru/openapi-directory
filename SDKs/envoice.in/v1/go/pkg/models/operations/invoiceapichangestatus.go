package operations

import (
"openapi/pkg/models/shared")

type InvoiceAPIChangeStatusHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type InvoiceAPIChangeStatusRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ChangeStatusAPIModel *shared.ChangeStatusAPIModel `request:"mediaType=application/json"`
    ChangeStatusAPIModel1 *shared.ChangeStatusAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
    ChangeStatusAPIModel2 *shared.ChangeStatusAPIModel `request:"mediaType=text/json"`
    TextHTML []byte `request:"mediaType=text/html"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type InvoiceAPIChangeStatusRequest struct {
    Headers InvoiceAPIChangeStatusHeaders 
    Request InvoiceAPIChangeStatusRequests 
    
}

type InvoiceAPIChangeStatusResponse struct {
    Body []byte 
    ContentType string 
    InvoiceAPIChangeStatus200ApplicationJSONBoolean *bool 
    InvoiceAPIChangeStatus200TextJSONBoolean *bool 
    StatusCode int64 
    
}


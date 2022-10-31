package operations

import (
"openapi/pkg/models/shared")

type ClientAPIDeleteHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type ClientAPIDeleteRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ClientDeleteAPIModel *shared.ClientDeleteAPIModel `request:"mediaType=application/json"`
    ClientDeleteAPIModel1 *shared.ClientDeleteAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
    ClientDeleteAPIModel2 *shared.ClientDeleteAPIModel `request:"mediaType=text/json"`
    TextHTML []byte `request:"mediaType=text/html"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ClientAPIDeleteRequest struct {
    Headers ClientAPIDeleteHeaders 
    Request ClientAPIDeleteRequests 
    
}

type ClientAPIDeleteResponse struct {
    Body []byte 
    ClientAPIDelete200ApplicationJSONInt32Integer *int32 
    ClientAPIDelete200TextJSONInt32Integer *int32 
    ContentType string 
    StatusCode int64 
    
}


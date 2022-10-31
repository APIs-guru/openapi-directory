package operations

import (
"openapi/pkg/models/shared")

type TaxAPINewHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type TaxAPINewRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TaxCreateAPIModel *shared.TaxCreateAPIModel `request:"mediaType=application/json"`
    TaxCreateAPIModel1 *shared.TaxCreateAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
    TaxCreateAPIModel2 *shared.TaxCreateAPIModel `request:"mediaType=text/json"`
    TextHTML []byte `request:"mediaType=text/html"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type TaxAPINewRequest struct {
    Headers TaxAPINewHeaders 
    Request TaxAPINewRequests 
    
}

type TaxAPINewResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TaxAPINew200ApplicationJSONInt32Integer *int32 
    TaxAPINew200TextJSONInt32Integer *int32 
    
}


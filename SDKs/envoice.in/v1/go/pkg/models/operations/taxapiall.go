package operations

import (
"openapi/pkg/models/shared")

type TaxAPIAllHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type TaxAPIAllRequest struct {
    Headers TaxAPIAllHeaders 
    
}

type TaxAPIAllResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TaxDetailsAPIModels []shared.TaxDetailsAPIModel 
    
}


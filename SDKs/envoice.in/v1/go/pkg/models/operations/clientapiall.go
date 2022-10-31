package operations

import (
"openapi/pkg/models/shared")

type ClientAPIAllHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type ClientAPIAllRequest struct {
    Headers ClientAPIAllHeaders 
    
}

type ClientAPIAllResponse struct {
    Body []byte 
    ClientDetailsAPIModels []shared.ClientDetailsAPIModel 
    ContentType string 
    StatusCode int64 
    
}


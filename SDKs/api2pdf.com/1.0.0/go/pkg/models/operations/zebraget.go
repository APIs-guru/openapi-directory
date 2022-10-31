package operations

import (
"openapi/pkg/models/shared")

type ZebraGetQueryParams struct {
    Format string `queryParam:"style=form,explode=true,name=format"`
    Height *int64 `queryParam:"style=form,explode=true,name=height"`
    Showlabel *bool `queryParam:"style=form,explode=true,name=showlabel"`
    Value string `queryParam:"style=form,explode=true,name=value"`
    Width *int64 `queryParam:"style=form,explode=true,name=width"`
    
}

type ZebraGetSecurity struct {
    QueryAPIKey shared.SchemeQueryAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type ZebraGetRequest struct {
    QueryParams ZebraGetQueryParams 
    Security ZebraGetSecurity 
    
}

type ZebraGetResponse struct {
    ContentType string 
    StatusCode int64 
    ZebraGet200ImagePngBinaryString []byte 
    
}


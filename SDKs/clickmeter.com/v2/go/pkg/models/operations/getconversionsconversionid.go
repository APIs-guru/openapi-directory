package operations

import (
"openapi/pkg/models/shared")

type GetConversionsConversionIDPathParams struct {
    ConversionID int64 `pathParam:"style=simple,explode=false,name=conversionId"`
    
}

type GetConversionsConversionIDRequest struct {
    PathParams GetConversionsConversionIDPathParams 
    
}

type GetConversionsConversionIDResponse struct {
    APICoreDtoConversionsConversion *shared.APICoreDtoConversionsConversion 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


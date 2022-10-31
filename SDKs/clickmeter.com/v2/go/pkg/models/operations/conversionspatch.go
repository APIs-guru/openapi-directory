package operations

import (
"openapi/pkg/models/shared")

type ConversionsPatchPathParams struct {
    ConversionID int64 `pathParam:"style=simple,explode=false,name=conversionId"`
    
}

type ConversionsPatchRequests struct {
    APICoreRequestsConversionPatchBody *shared.APICoreRequestsConversionPatchBody `request:"mediaType=application/json"`
    APICoreRequestsConversionPatchBody1 *shared.APICoreRequestsConversionPatchBody `request:"mediaType=application/x-www-form-urlencoded"`
    APICoreRequestsConversionPatchBody2 *shared.APICoreRequestsConversionPatchBody `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ConversionsPatchRequest struct {
    PathParams ConversionsPatchPathParams 
    Request ConversionsPatchRequests 
    
}

type ConversionsPatchResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


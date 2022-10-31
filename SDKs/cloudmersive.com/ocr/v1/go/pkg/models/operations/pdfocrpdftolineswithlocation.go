package operations

import (
"openapi/pkg/models/shared")

type PdfOcrPdfToLinesWithLocationHeaders struct {
    Language *string `header:"style=simple,explode=false,name=language"`
    Preprocessing *string `header:"style=simple,explode=false,name=preprocessing"`
    
}

type PdfOcrPdfToLinesWithLocationRequestBodyImageFile struct {
    Content []byte `multipartForm:"content"`
    ImageFile string `multipartForm:"name=imageFile"`
    
}

type PdfOcrPdfToLinesWithLocationRequestBody struct {
    ImageFile PdfOcrPdfToLinesWithLocationRequestBodyImageFile `multipartForm:"file"`
    
}

type PdfOcrPdfToLinesWithLocationSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PdfOcrPdfToLinesWithLocationRequest struct {
    Headers PdfOcrPdfToLinesWithLocationHeaders 
    Request PdfOcrPdfToLinesWithLocationRequestBody `request:"mediaType=multipart/form-data"`
    Security PdfOcrPdfToLinesWithLocationSecurity 
    
}

type PdfOcrPdfToLinesWithLocationResponse struct {
    Body []byte 
    ContentType string 
    PdfToLinesWithLocationResult *shared.PdfToLinesWithLocationResult 
    StatusCode int64 
    
}


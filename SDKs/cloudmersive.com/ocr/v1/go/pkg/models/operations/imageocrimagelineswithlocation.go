package operations

import (
"openapi/pkg/models/shared")

type ImageOcrImageLinesWithLocationHeaders struct {
    Language *string `header:"style=simple,explode=false,name=language"`
    Preprocessing *string `header:"style=simple,explode=false,name=preprocessing"`
    
}

type ImageOcrImageLinesWithLocationRequestBodyImageFile struct {
    Content []byte `multipartForm:"content"`
    ImageFile string `multipartForm:"name=imageFile"`
    
}

type ImageOcrImageLinesWithLocationRequestBody struct {
    ImageFile ImageOcrImageLinesWithLocationRequestBodyImageFile `multipartForm:"file"`
    
}

type ImageOcrImageLinesWithLocationSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ImageOcrImageLinesWithLocationRequest struct {
    Headers ImageOcrImageLinesWithLocationHeaders 
    Request ImageOcrImageLinesWithLocationRequestBody `request:"mediaType=multipart/form-data"`
    Security ImageOcrImageLinesWithLocationSecurity 
    
}

type ImageOcrImageLinesWithLocationResponse struct {
    Body []byte 
    ContentType string 
    ImageToLinesWithLocationResult *shared.ImageToLinesWithLocationResult 
    StatusCode int64 
    
}


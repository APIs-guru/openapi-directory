package operations

import (
"openapi/pkg/models/shared")

type ImageOcrPhotoRecognizeReceiptHeaders struct {
    Language *string `header:"style=simple,explode=false,name=language"`
    Preprocessing *string `header:"style=simple,explode=false,name=preprocessing"`
    RecognitionMode *string `header:"style=simple,explode=false,name=recognitionMode"`
    
}

type ImageOcrPhotoRecognizeReceiptRequestBodyImageFile struct {
    Content []byte `multipartForm:"content"`
    ImageFile string `multipartForm:"name=imageFile"`
    
}

type ImageOcrPhotoRecognizeReceiptRequestBody struct {
    ImageFile ImageOcrPhotoRecognizeReceiptRequestBodyImageFile `multipartForm:"file"`
    
}

type ImageOcrPhotoRecognizeReceiptSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ImageOcrPhotoRecognizeReceiptRequest struct {
    Headers ImageOcrPhotoRecognizeReceiptHeaders 
    Request ImageOcrPhotoRecognizeReceiptRequestBody `request:"mediaType=multipart/form-data"`
    Security ImageOcrPhotoRecognizeReceiptSecurity 
    
}

type ImageOcrPhotoRecognizeReceiptResponse struct {
    Body []byte 
    ContentType string 
    ReceiptRecognitionResult *shared.ReceiptRecognitionResult 
    StatusCode int64 
    
}


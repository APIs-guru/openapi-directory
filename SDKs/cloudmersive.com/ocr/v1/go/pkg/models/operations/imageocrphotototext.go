package operations

import (
"openapi/pkg/models/shared")

type ImageOcrPhotoToTextHeaders struct {
    Language *string `header:"style=simple,explode=false,name=language"`
    RecognitionMode *string `header:"style=simple,explode=false,name=recognitionMode"`
    
}

type ImageOcrPhotoToTextRequestBodyImageFile struct {
    Content []byte `multipartForm:"content"`
    ImageFile string `multipartForm:"name=imageFile"`
    
}

type ImageOcrPhotoToTextRequestBody struct {
    ImageFile ImageOcrPhotoToTextRequestBodyImageFile `multipartForm:"file"`
    
}

type ImageOcrPhotoToTextSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ImageOcrPhotoToTextRequest struct {
    Headers ImageOcrPhotoToTextHeaders 
    Request ImageOcrPhotoToTextRequestBody `request:"mediaType=multipart/form-data"`
    Security ImageOcrPhotoToTextSecurity 
    
}

type ImageOcrPhotoToTextResponse struct {
    Body []byte 
    ContentType string 
    ImageToTextResponse *shared.ImageToTextResponse 
    StatusCode int64 
    
}


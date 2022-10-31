package operations

import (
"openapi/pkg/models/shared")

type ImageOcrPhotoRecognizeFormAdvancedHeaders struct {
    BucketID *string `header:"style=simple,explode=false,name=bucketID"`
    BucketSecretKey *string `header:"style=simple,explode=false,name=bucketSecretKey"`
    Diagnostics *string `header:"style=simple,explode=false,name=diagnostics"`
    Preprocessing *string `header:"style=simple,explode=false,name=preprocessing"`
    RecognitionMode *string `header:"style=simple,explode=false,name=recognitionMode"`
    
}

type ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile struct {
    Content []byte `multipartForm:"content"`
    ImageFile string `multipartForm:"name=imageFile"`
    
}

type ImageOcrPhotoRecognizeFormAdvancedRequestBody struct {
    ImageFile ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile `multipartForm:"file"`
    
}

type ImageOcrPhotoRecognizeFormAdvancedSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ImageOcrPhotoRecognizeFormAdvancedRequest struct {
    Headers ImageOcrPhotoRecognizeFormAdvancedHeaders 
    Request ImageOcrPhotoRecognizeFormAdvancedRequestBody `request:"mediaType=multipart/form-data"`
    Security ImageOcrPhotoRecognizeFormAdvancedSecurity 
    
}

type ImageOcrPhotoRecognizeFormAdvancedResponse struct {
    Body []byte 
    ContentType string 
    FormRecognitionResult *shared.FormRecognitionResult 
    StatusCode int64 
    
}


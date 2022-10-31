package operations

import (
"openapi/pkg/models/shared")

type PreprocessingGetPageAngleRequestBodyImageFile struct {
    Content []byte `multipartForm:"content"`
    ImageFile string `multipartForm:"name=imageFile"`
    
}

type PreprocessingGetPageAngleRequestBody struct {
    ImageFile PreprocessingGetPageAngleRequestBodyImageFile `multipartForm:"file"`
    
}

type PreprocessingGetPageAngleSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PreprocessingGetPageAngleRequest struct {
    Request PreprocessingGetPageAngleRequestBody `request:"mediaType=multipart/form-data"`
    Security PreprocessingGetPageAngleSecurity 
    
}

type PreprocessingGetPageAngleResponse struct {
    Body []byte 
    ContentType string 
    GetPageAngleResult *shared.GetPageAngleResult 
    StatusCode int64 
    
}


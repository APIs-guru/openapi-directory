package operations

import (
"openapi/pkg/models/shared")

type PreprocessingUnskewRequestBodyImageFile struct {
    Content []byte `multipartForm:"content"`
    ImageFile string `multipartForm:"name=imageFile"`
    
}

type PreprocessingUnskewRequestBody struct {
    ImageFile PreprocessingUnskewRequestBodyImageFile `multipartForm:"file"`
    
}

type PreprocessingUnskewSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PreprocessingUnskewRequest struct {
    Request PreprocessingUnskewRequestBody `request:"mediaType=multipart/form-data"`
    Security PreprocessingUnskewSecurity 
    
}

type PreprocessingUnskewResponse struct {
    ContentType string 
    PreprocessingUnskew200ApplicationJSONByteString *string 
    PreprocessingUnskew200ApplicationXMLByteString *string 
    PreprocessingUnskew200TextJSONByteString *string 
    PreprocessingUnskew200TextXMLByteString *string 
    StatusCode int64 
    
}


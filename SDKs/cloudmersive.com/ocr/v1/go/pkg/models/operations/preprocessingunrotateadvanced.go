package operations

import (
"openapi/pkg/models/shared")

type PreprocessingUnrotateAdvancedRequestBodyImageFile struct {
    Content []byte `multipartForm:"content"`
    ImageFile string `multipartForm:"name=imageFile"`
    
}

type PreprocessingUnrotateAdvancedRequestBody struct {
    ImageFile PreprocessingUnrotateAdvancedRequestBodyImageFile `multipartForm:"file"`
    
}

type PreprocessingUnrotateAdvancedSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PreprocessingUnrotateAdvancedRequest struct {
    Request PreprocessingUnrotateAdvancedRequestBody `request:"mediaType=multipart/form-data"`
    Security PreprocessingUnrotateAdvancedSecurity 
    
}

type PreprocessingUnrotateAdvancedResponse struct {
    ContentType string 
    PreprocessingUnrotateAdvanced200ApplicationJSONByteString *string 
    PreprocessingUnrotateAdvanced200ApplicationXMLByteString *string 
    PreprocessingUnrotateAdvanced200TextJSONByteString *string 
    PreprocessingUnrotateAdvanced200TextXMLByteString *string 
    StatusCode int64 
    
}


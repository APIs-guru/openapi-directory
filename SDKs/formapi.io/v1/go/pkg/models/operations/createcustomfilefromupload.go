package operations

import (
"openapi/pkg/models/shared")

type CreateCustomFileFromUploadCreateCustomFileData struct {
    CacheID string `json:"cache_id"`
    
}

type CreateCustomFileFromUploadSecurity struct {
    APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
    
}

type CreateCustomFileFromUploadRequest struct {
    Request CreateCustomFileFromUploadCreateCustomFileData `request:"mediaType=application/json"`
    Security CreateCustomFileFromUploadSecurity 
    
}

type CreateCustomFileFromUploadCreateCustomFileResponseCustomFile struct {
    ID string `json:"id"`
    URL string `json:"url"`
    
}


type CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum string

const (
    CreateCustomFileFromUploadCreateCustomFileResponseStatusEnumSuccess CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum = "success"
CreateCustomFileFromUploadCreateCustomFileResponseStatusEnumError CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum = "error"
)


type CreateCustomFileFromUploadCreateCustomFileResponse struct {
    CustomFile CreateCustomFileFromUploadCreateCustomFileResponseCustomFile `json:"custom_file"`
    Errors []string `json:"errors,omitempty"`
    Status CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum `json:"status"`
    
}

type CreateCustomFileFromUploadResponse struct {
    ContentType string 
    StatusCode int64 
    AuthenticationError *shared.AuthenticationError 
    CreateCustomFileResponse *CreateCustomFileFromUploadCreateCustomFileResponse 
    
}


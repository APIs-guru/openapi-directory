package operations

import (
"openapi/pkg/models/shared")

type GistsCreateRequestBodyFiles struct {
    Content string `json:"content"`
    
}


type GistsCreateRequestBodyPublic2Enum string

const (
    GistsCreateRequestBodyPublic2EnumTrue GistsCreateRequestBodyPublic2Enum = "true"
GistsCreateRequestBodyPublic2EnumFalse GistsCreateRequestBodyPublic2Enum = "false"
)


type GistsCreateRequestBody struct {
    Description *string `json:"description,omitempty"`
    Files map[string]GistsCreateRequestBodyFiles `json:"files"`
    Public *interface{} `json:"public,omitempty"`
    
}

type GistsCreateRequest struct {
    Request *GistsCreateRequestBody `request:"mediaType=application/json"`
    
}

type GistsCreateResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GistSimple *shared.GistSimple 
    ValidationError *shared.ValidationError 
    
}


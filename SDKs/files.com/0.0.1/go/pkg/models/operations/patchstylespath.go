package operations

import (
"openapi/pkg/models/shared")

type PatchStylesPathPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type PatchStylesPathRequestBodyFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type PatchStylesPathRequestBody struct {
    File PatchStylesPathRequestBodyFile `multipartForm:"file"`
    
}

type PatchStylesPathRequest struct {
    PathParams PatchStylesPathPathParams 
    Request PatchStylesPathRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PatchStylesPathResponse struct {
    ContentType string 
    StatusCode int64 
    StyleEntity *shared.StyleEntity 
    
}


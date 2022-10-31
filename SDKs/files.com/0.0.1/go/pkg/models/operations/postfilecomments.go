package operations

import (
"openapi/pkg/models/shared")

type PostFileCommentsRequestBody struct {
    Body string `multipartForm:"name=body"`
    Path string `multipartForm:"name=path"`
    
}

type PostFileCommentsRequest struct {
    Request PostFileCommentsRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostFileCommentsResponse struct {
    ContentType string 
    FileCommentEntity *shared.FileCommentEntity 
    StatusCode int64 
    
}


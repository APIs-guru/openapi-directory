package operations

import (
"openapi/pkg/models/shared")

type PostRequestsRequestBody struct {
    Destination string `multipartForm:"name=destination"`
    GroupIds *string `multipartForm:"name=group_ids"`
    Path string `multipartForm:"name=path"`
    UserIds *string `multipartForm:"name=user_ids"`
    
}

type PostRequestsRequest struct {
    Request PostRequestsRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostRequestsResponse struct {
    ContentType string 
    RequestEntity *shared.RequestEntity 
    StatusCode int64 
    
}


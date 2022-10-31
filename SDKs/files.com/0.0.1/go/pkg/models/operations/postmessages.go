package operations

import (
"openapi/pkg/models/shared")

type PostMessagesRequestBody struct {
    Body string `multipartForm:"name=body"`
    ProjectID int32 `multipartForm:"name=project_id"`
    Subject string `multipartForm:"name=subject"`
    UserID *int32 `multipartForm:"name=user_id"`
    
}

type PostMessagesRequest struct {
    Request *PostMessagesRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostMessagesResponse struct {
    ContentType string 
    MessageEntity *shared.MessageEntity 
    StatusCode int64 
    
}


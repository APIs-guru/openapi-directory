package operations

import (
"openapi/pkg/models/shared")

type PostSessionsRequestBody struct {
    Otp *string `multipartForm:"name=otp"`
    PartialSessionID *string `multipartForm:"name=partial_session_id"`
    Password *string `multipartForm:"name=password"`
    Username *string `multipartForm:"name=username"`
    
}

type PostSessionsRequest struct {
    Request *PostSessionsRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostSessionsResponse struct {
    ContentType string 
    SessionEntity *shared.SessionEntity 
    StatusCode int64 
    
}


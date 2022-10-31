package operations

import (
"time"
"openapi/pkg/models/shared")

type PostUsersMeHistoryVideosRemoveRequestBody struct {
    BeforeDate *time.Time `multipartForm:"name=beforeDate"`
    
}

type PostUsersMeHistoryVideosRemoveSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PostUsersMeHistoryVideosRemoveRequest struct {
    Request *PostUsersMeHistoryVideosRemoveRequestBody `request:"mediaType=multipart/form-data"`
    Security PostUsersMeHistoryVideosRemoveSecurity 
    
}

type PostUsersMeHistoryVideosRemoveResponse struct {
    ContentType string 
    StatusCode int64 
    
}


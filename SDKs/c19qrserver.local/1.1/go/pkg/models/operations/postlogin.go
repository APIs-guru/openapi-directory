package operations

import (
"openapi/pkg/models/shared")


type PostLoginSampleSourceEnum string

const (
    PostLoginSampleSourceEnumIOs PostLoginSampleSourceEnum = "iOS"
PostLoginSampleSourceEnumAndroid PostLoginSampleSourceEnum = "android"
PostLoginSampleSourceEnumWeb PostLoginSampleSourceEnum = "web"
)


type PostLoginSample struct {
    Email *string `json:"email,omitempty"`
    Password *string `json:"password,omitempty"`
    Source *PostLoginSampleSourceEnum `json:"source,omitempty"`
    
}

type PostLoginRequest struct {
    Request PostLoginSample `request:"mediaType=application/json"`
    
}

type PostLoginResponse struct {
    ContentType string 
    StatusCode int64 
    InvalidToken *shared.InvalidToken 
    LoginResponse *shared.LoginResponse 
    
}


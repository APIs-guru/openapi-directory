package operations

import (
"openapi/pkg/models/shared")

type GetaccesstokenIDRequestBody struct {
    GetAccessTokenUsingAuthorizationCode *shared.AccessToken `json:"Get access token using authorization code,omitempty"`
    GetAccessTokenUsingDeviceCodeAndOtp *interface{} `json:"Get access token using device code and OTP,omitempty"`
    GetAccessTokenUsingRefreshToken *shared.RefreshToken `json:"Get access token using refresh token,omitempty"`
    
}

type GetaccesstokenIDRequest struct {
    Request GetaccesstokenIDRequestBody `request:"mediaType=application/json"`
    
}

type GetaccesstokenIDResponse struct {
    AccessResponse *shared.AccessResponse 
    ContentType string 
    StatusCode int64 
    
}


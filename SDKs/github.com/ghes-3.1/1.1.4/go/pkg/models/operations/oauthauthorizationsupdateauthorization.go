package operations

import (
"openapi/pkg/models/shared")

type OauthAuthorizationsUpdateAuthorizationPathParams struct {
    AuthorizationID int64 `pathParam:"style=simple,explode=false,name=authorization_id"`
    
}

type OauthAuthorizationsUpdateAuthorizationRequestBody struct {
    AddScopes []string `json:"add_scopes,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    Note *string `json:"note,omitempty"`
    NoteURL *string `json:"note_url,omitempty"`
    RemoveScopes []string `json:"remove_scopes,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    
}

type OauthAuthorizationsUpdateAuthorizationRequest struct {
    PathParams OauthAuthorizationsUpdateAuthorizationPathParams 
    Request *OauthAuthorizationsUpdateAuthorizationRequestBody `request:"mediaType=application/json"`
    
}

type OauthAuthorizationsUpdateAuthorizationResponse struct {
    ContentType string 
    StatusCode int64 
    Authorization *shared.Authorization 
    ValidationError *shared.ValidationError 
    
}


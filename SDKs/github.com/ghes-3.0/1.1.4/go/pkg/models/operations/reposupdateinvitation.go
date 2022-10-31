package operations

import (
"openapi/pkg/models/shared")

type ReposUpdateInvitationPathParams struct {
    InvitationID int64 `pathParam:"style=simple,explode=false,name=invitation_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type ReposUpdateInvitationRequestBodyPermissionsEnum string

const (
    ReposUpdateInvitationRequestBodyPermissionsEnumRead ReposUpdateInvitationRequestBodyPermissionsEnum = "read"
ReposUpdateInvitationRequestBodyPermissionsEnumWrite ReposUpdateInvitationRequestBodyPermissionsEnum = "write"
ReposUpdateInvitationRequestBodyPermissionsEnumMaintain ReposUpdateInvitationRequestBodyPermissionsEnum = "maintain"
ReposUpdateInvitationRequestBodyPermissionsEnumTriage ReposUpdateInvitationRequestBodyPermissionsEnum = "triage"
ReposUpdateInvitationRequestBodyPermissionsEnumAdmin ReposUpdateInvitationRequestBodyPermissionsEnum = "admin"
)


type ReposUpdateInvitationRequestBody struct {
    Permissions *ReposUpdateInvitationRequestBodyPermissionsEnum `json:"permissions,omitempty"`
    
}

type ReposUpdateInvitationRequest struct {
    PathParams ReposUpdateInvitationPathParams 
    Request *ReposUpdateInvitationRequestBody `request:"mediaType=application/json"`
    
}

type ReposUpdateInvitationResponse struct {
    ContentType string 
    StatusCode int64 
    RepositoryInvitation *shared.RepositoryInvitation 
    
}


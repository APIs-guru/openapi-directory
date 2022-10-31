package operations

import (
"openapi/pkg/models/shared")

type ScimProvisionAndInviteUserPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type ScimProvisionAndInviteUserRequestBodyEmails struct {
    Primary *bool `json:"primary,omitempty"`
    Type *string `json:"type,omitempty"`
    Value string `json:"value"`
    
}

type ScimProvisionAndInviteUserRequestBodyName struct {
    FamilyName string `json:"familyName"`
    Formatted *string `json:"formatted,omitempty"`
    GivenName string `json:"givenName"`
    
}

type ScimProvisionAndInviteUserRequestBody struct {
    Active *bool `json:"active,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Emails []ScimProvisionAndInviteUserRequestBodyEmails `json:"emails"`
    ExternalID *string `json:"externalId,omitempty"`
    Groups []string `json:"groups,omitempty"`
    Name ScimProvisionAndInviteUserRequestBodyName `json:"name"`
    Schemas []string `json:"schemas,omitempty"`
    UserName string `json:"userName"`
    
}

type ScimProvisionAndInviteUserRequest struct {
    PathParams ScimProvisionAndInviteUserPathParams 
    Request *ScimProvisionAndInviteUserRequestBody `request:"mediaType=application/json"`
    
}

type ScimProvisionAndInviteUserResponse struct {
    ContentType string 
    StatusCode int64 
    ScimError *shared.ScimError 
    ScimUser *shared.ScimUser 
    
}


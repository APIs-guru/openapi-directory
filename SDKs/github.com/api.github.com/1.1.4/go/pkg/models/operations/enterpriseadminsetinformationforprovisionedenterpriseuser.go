package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    ScimUserID string `pathParam:"style=simple,explode=false,name=scim_user_id"`
    
}

type EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails struct {
    Primary bool `json:"primary"`
    Type string `json:"type"`
    Value string `json:"value"`
    
}

type EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups struct {
    Value *string `json:"value,omitempty"`
    
}

type EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName struct {
    FamilyName string `json:"familyName"`
    GivenName string `json:"givenName"`
    
}

type EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody struct {
    Emails []EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails `json:"emails"`
    Groups []EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups `json:"groups,omitempty"`
    Name EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName `json:"name"`
    Schemas []string `json:"schemas"`
    UserName string `json:"userName"`
    
}

type EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest struct {
    PathParams EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams 
    Request *EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse struct {
    ContentType string 
    StatusCode int64 
    ScimEnterpriseUser *shared.ScimEnterpriseUser 
    
}


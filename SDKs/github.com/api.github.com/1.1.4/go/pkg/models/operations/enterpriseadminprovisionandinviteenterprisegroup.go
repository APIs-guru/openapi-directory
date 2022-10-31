package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    
}

type EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers struct {
    Value string `json:"value"`
    
}

type EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody struct {
    DisplayName string `json:"displayName"`
    Members []EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers `json:"members,omitempty"`
    Schemas []string `json:"schemas"`
    
}

type EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest struct {
    PathParams EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams 
    Request *EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse struct {
    ContentType string 
    StatusCode int64 
    ScimEnterpriseGroup *shared.ScimEnterpriseGroup 
    
}


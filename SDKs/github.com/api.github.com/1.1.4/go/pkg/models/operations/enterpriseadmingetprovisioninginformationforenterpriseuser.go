package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    ScimUserID string `pathParam:"style=simple,explode=false,name=scim_user_id"`
    
}

type EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest struct {
    PathParams EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams 
    
}

type EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse struct {
    ContentType string 
    StatusCode int64 
    ScimEnterpriseUser *shared.ScimEnterpriseUser 
    
}


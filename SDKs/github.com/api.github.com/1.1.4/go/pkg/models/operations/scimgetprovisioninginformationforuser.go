package operations

import (
"openapi/pkg/models/shared")

type ScimGetProvisioningInformationForUserPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    ScimUserID string `pathParam:"style=simple,explode=false,name=scim_user_id"`
    
}

type ScimGetProvisioningInformationForUserRequest struct {
    PathParams ScimGetProvisioningInformationForUserPathParams 
    
}

type ScimGetProvisioningInformationForUserResponse struct {
    ContentType string 
    StatusCode int64 
    ScimError *shared.ScimError 
    ScimUser *shared.ScimUser 
    
}


package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    ScimGroupID string `pathParam:"style=simple,explode=false,name=scim_group_id"`
    
}

type EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams struct {
    ExcludedAttributes *string `queryParam:"style=form,explode=true,name=excludedAttributes"`
    
}

type EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest struct {
    PathParams EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams 
    QueryParams EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams 
    
}

type EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse struct {
    ContentType string 
    StatusCode int64 
    ScimEnterpriseGroup *shared.ScimEnterpriseGroup 
    
}


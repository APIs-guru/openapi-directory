package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminUpdateLdapMappingForTeamPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type EnterpriseAdminUpdateLdapMappingForTeamRequestBody struct {
    LdapDn *string `json:"ldap_dn,omitempty"`
    
}

type EnterpriseAdminUpdateLdapMappingForTeamRequest struct {
    PathParams EnterpriseAdminUpdateLdapMappingForTeamPathParams 
    Request *EnterpriseAdminUpdateLdapMappingForTeamRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminUpdateLdapMappingForTeamResponse struct {
    ContentType string 
    StatusCode int64 
    LdapMappingTeam *shared.LdapMappingTeam 
    
}


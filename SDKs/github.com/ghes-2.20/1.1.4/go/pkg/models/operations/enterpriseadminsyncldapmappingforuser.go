package operations



type EnterpriseAdminSyncLdapMappingForUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type EnterpriseAdminSyncLdapMappingForUserRequest struct {
    PathParams EnterpriseAdminSyncLdapMappingForUserPathParams 
    
}

type EnterpriseAdminSyncLdapMappingForUser201ApplicationJSON struct {
    Status *string `json:"status,omitempty"`
    
}

type EnterpriseAdminSyncLdapMappingForUserResponse struct {
    ContentType string 
    StatusCode int64 
    EnterpriseAdminSyncLdapMappingForUser201ApplicationJSONObject *EnterpriseAdminSyncLdapMappingForUser201ApplicationJSON 
    
}


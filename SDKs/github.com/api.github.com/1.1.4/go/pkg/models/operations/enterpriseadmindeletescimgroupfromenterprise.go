package operations



type EnterpriseAdminDeleteScimGroupFromEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    ScimGroupID string `pathParam:"style=simple,explode=false,name=scim_group_id"`
    
}

type EnterpriseAdminDeleteScimGroupFromEnterpriseRequest struct {
    PathParams EnterpriseAdminDeleteScimGroupFromEnterprisePathParams 
    
}

type EnterpriseAdminDeleteScimGroupFromEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}


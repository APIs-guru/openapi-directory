package operations



type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    OrgID int64 `pathParam:"style=simple,explode=false,name=org_id"`
    
}

type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest struct {
    PathParams EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams 
    
}

type EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}


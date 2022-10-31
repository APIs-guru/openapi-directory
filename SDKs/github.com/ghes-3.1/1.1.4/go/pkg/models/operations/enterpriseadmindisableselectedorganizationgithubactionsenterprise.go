package operations



type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    OrgID int64 `pathParam:"style=simple,explode=false,name=org_id"`
    
}

type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest struct {
    PathParams EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams 
    
}

type EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}


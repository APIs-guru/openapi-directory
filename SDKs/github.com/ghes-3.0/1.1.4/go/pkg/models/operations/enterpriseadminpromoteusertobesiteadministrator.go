package operations

type EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type EnterpriseAdminPromoteUserToBeSiteAdministratorRequest struct {
	PathParams EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams
}

type EnterpriseAdminPromoteUserToBeSiteAdministratorResponse struct {
	ContentType string
	StatusCode  int64
}

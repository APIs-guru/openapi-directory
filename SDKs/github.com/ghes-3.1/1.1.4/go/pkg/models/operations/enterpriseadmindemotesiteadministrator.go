package operations

type EnterpriseAdminDemoteSiteAdministratorPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type EnterpriseAdminDemoteSiteAdministratorRequest struct {
	PathParams EnterpriseAdminDemoteSiteAdministratorPathParams
}

type EnterpriseAdminDemoteSiteAdministratorResponse struct {
	ContentType string
	StatusCode  int64
}

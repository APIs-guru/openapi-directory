package operations

type EnterpriseAdminUnsuspendUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type EnterpriseAdminUnsuspendUserRequestBody struct {
	Reason *string `json:"reason"`
}

type EnterpriseAdminUnsuspendUserRequest struct {
	PathParams EnterpriseAdminUnsuspendUserPathParams
	Request    *EnterpriseAdminUnsuspendUserRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUnsuspendUserResponse struct {
	ContentType string
	StatusCode  int64
}

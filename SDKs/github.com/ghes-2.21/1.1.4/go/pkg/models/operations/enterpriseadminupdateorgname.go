package operations

type EnterpriseAdminUpdateOrgNamePathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type EnterpriseAdminUpdateOrgNameRequestBody struct {
	Login string `json:"login"`
}

type EnterpriseAdminUpdateOrgNameRequest struct {
	PathParams EnterpriseAdminUpdateOrgNamePathParams
	Request    *EnterpriseAdminUpdateOrgNameRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUpdateOrgName202ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
	URL     *string `json:"url,omitempty"`
}

type EnterpriseAdminUpdateOrgNameResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	EnterpriseAdminUpdateOrgName202ApplicationJSONObject *EnterpriseAdminUpdateOrgName202ApplicationJSON
}

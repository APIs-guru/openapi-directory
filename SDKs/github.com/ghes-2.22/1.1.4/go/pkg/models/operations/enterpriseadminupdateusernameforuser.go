package operations

type EnterpriseAdminUpdateUsernameForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type EnterpriseAdminUpdateUsernameForUserRequestBody struct {
	Login string `json:"login"`
}

type EnterpriseAdminUpdateUsernameForUserRequest struct {
	PathParams EnterpriseAdminUpdateUsernameForUserPathParams
	Request    *EnterpriseAdminUpdateUsernameForUserRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUpdateUsernameForUser202ApplicationJSON struct {
	Message *string `json:"message"`
	URL     *string `json:"url"`
}

type EnterpriseAdminUpdateUsernameForUserResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	EnterpriseAdminUpdateUsernameForUser202ApplicationJSONObject *EnterpriseAdminUpdateUsernameForUser202ApplicationJSON
}

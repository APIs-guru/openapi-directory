package operations

type DisableOrganizationAdminAccountHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisableOrganizationAdminAccountRequestBody struct {
	AdminAccountID string `json:"AdminAccountId"`
}

type DisableOrganizationAdminAccountRequest struct {
	Headers DisableOrganizationAdminAccountHeaders
	Request DisableOrganizationAdminAccountRequestBody `request:"mediaType=application/json"`
}

type DisableOrganizationAdminAccountResponse struct {
	ContentType                             string
	DisableOrganizationAdminAccountResponse map[string]interface{}
	InternalException                       *interface{}
	InvalidAccessException                  *interface{}
	InvalidInputException                   *interface{}
	LimitExceededException                  *interface{}
	StatusCode                              int64
}

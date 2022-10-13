package operations

type DisableOrganizationAdminAccountQueryParams struct {
	AdminAccountID string `queryParam:"style=form,explode=true,name=adminAccountId"`
}

type DisableOrganizationAdminAccountHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisableOrganizationAdminAccountRequest struct {
	QueryParams DisableOrganizationAdminAccountQueryParams
	Headers     DisableOrganizationAdminAccountHeaders
}

type DisableOrganizationAdminAccountResponse struct {
	AccessDeniedException                   *interface{}
	ConflictException                       *interface{}
	ContentType                             string
	DisableOrganizationAdminAccountResponse map[string]interface{}
	InternalServerException                 *interface{}
	ResourceNotFoundException               *interface{}
	ServiceQuotaExceededException           *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
	ValidationException                     *interface{}
}

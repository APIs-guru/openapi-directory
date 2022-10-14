package operations

type EnableOrganizationAdminAccountHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type EnableOrganizationAdminAccountRequestBody struct {
	AdminAccountID string  `json:"adminAccountId"`
	ClientToken    *string `json:"clientToken,omitempty"`
}

type EnableOrganizationAdminAccountRequest struct {
	Headers EnableOrganizationAdminAccountHeaders
	Request EnableOrganizationAdminAccountRequestBody `request:"mediaType=application/json"`
}

type EnableOrganizationAdminAccountResponse struct {
	AccessDeniedException                  *interface{}
	ConflictException                      *interface{}
	ContentType                            string
	EnableOrganizationAdminAccountResponse map[string]interface{}
	InternalServerException                *interface{}
	ResourceNotFoundException              *interface{}
	ServiceQuotaExceededException          *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	ValidationException                    *interface{}
}

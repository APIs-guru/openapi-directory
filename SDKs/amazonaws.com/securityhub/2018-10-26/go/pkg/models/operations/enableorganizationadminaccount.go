package operations

type EnableOrganizationAdminAccountHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type EnableOrganizationAdminAccountRequestBody struct {
	AdminAccountID string `json:"AdminAccountId"`
}

type EnableOrganizationAdminAccountRequest struct {
	Headers EnableOrganizationAdminAccountHeaders
	Request EnableOrganizationAdminAccountRequestBody `request:"mediaType=application/json"`
}

type EnableOrganizationAdminAccountResponse struct {
	ContentType                            string
	EnableOrganizationAdminAccountResponse map[string]interface{}
	InternalException                      *interface{}
	InvalidAccessException                 *interface{}
	InvalidInputException                  *interface{}
	LimitExceededException                 *interface{}
	StatusCode                             int64
}

package operations

type DisassociateFromAdministratorAccountHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisassociateFromAdministratorAccountRequest struct {
	Headers DisassociateFromAdministratorAccountHeaders
}

type DisassociateFromAdministratorAccountResponse struct {
	ContentType                                  string
	DisassociateFromAdministratorAccountResponse map[string]interface{}
	InternalException                            *interface{}
	InvalidAccessException                       *interface{}
	InvalidInputException                        *interface{}
	LimitExceededException                       *interface{}
	ResourceNotFoundException                    *interface{}
	StatusCode                                   int64
}

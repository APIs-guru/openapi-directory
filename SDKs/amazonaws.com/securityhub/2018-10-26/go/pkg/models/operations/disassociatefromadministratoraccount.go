package operations

type DisassociateFromAdministratorAccountHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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

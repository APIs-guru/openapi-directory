package operations

type DisassociateMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisassociateMembersRequestBody struct {
	AccountIds []string `json:"AccountIds"`
}

type DisassociateMembersRequest struct {
	Headers DisassociateMembersHeaders
	Request DisassociateMembersRequestBody `request:"mediaType=application/json"`
}

type DisassociateMembersResponse struct {
	ContentType                 string
	DisassociateMembersResponse map[string]interface{}
	InternalException           *interface{}
	InvalidAccessException      *interface{}
	InvalidInputException       *interface{}
	LimitExceededException      *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}

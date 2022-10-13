package operations

type DisassociateDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisassociateDomainRequestBody struct {
	DomainName string `json:"DomainName"`
	FleetArn   string `json:"FleetArn"`
}

type DisassociateDomainRequest struct {
	Headers DisassociateDomainHeaders
	Request DisassociateDomainRequestBody `request:"mediaType=application/json"`
}

type DisassociateDomainResponse struct {
	ContentType                  string
	DisassociateDomainResponse   map[string]interface{}
	InternalServerErrorException *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
}

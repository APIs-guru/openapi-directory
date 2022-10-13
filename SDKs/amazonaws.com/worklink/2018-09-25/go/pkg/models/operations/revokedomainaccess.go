package operations

type RevokeDomainAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RevokeDomainAccessRequestBody struct {
	DomainName string `json:"DomainName"`
	FleetArn   string `json:"FleetArn"`
}

type RevokeDomainAccessRequest struct {
	Headers RevokeDomainAccessHeaders
	Request RevokeDomainAccessRequestBody `request:"mediaType=application/json"`
}

type RevokeDomainAccessResponse struct {
	ContentType                  string
	InternalServerErrorException *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	RevokeDomainAccessResponse   map[string]interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
}

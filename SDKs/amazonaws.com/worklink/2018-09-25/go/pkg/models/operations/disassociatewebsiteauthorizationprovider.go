package operations

type DisassociateWebsiteAuthorizationProviderHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DisassociateWebsiteAuthorizationProviderRequestBody struct {
	AuthorizationProviderID string `json:"AuthorizationProviderId"`
	FleetArn                string `json:"FleetArn"`
}

type DisassociateWebsiteAuthorizationProviderRequest struct {
	Headers DisassociateWebsiteAuthorizationProviderHeaders
	Request DisassociateWebsiteAuthorizationProviderRequestBody `request:"mediaType=application/json"`
}

type DisassociateWebsiteAuthorizationProviderResponse struct {
	ContentType                                      string
	DisassociateWebsiteAuthorizationProviderResponse map[string]interface{}
	InternalServerErrorException                     *interface{}
	InvalidRequestException                          *interface{}
	ResourceAlreadyExistsException                   *interface{}
	ResourceNotFoundException                        *interface{}
	StatusCode                                       int64
	TooManyRequestsException                         *interface{}
	UnauthorizedException                            *interface{}
}

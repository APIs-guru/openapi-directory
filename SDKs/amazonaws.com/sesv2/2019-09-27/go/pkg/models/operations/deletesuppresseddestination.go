package operations

type DeleteSuppressedDestinationPathParams struct {
	EmailAddress string `pathParam:"style=simple,explode=false,name=EmailAddress"`
}

type DeleteSuppressedDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteSuppressedDestinationRequest struct {
	PathParams DeleteSuppressedDestinationPathParams
	Headers    DeleteSuppressedDestinationHeaders
}

type DeleteSuppressedDestinationResponse struct {
	BadRequestException                 *interface{}
	ContentType                         string
	DeleteSuppressedDestinationResponse map[string]interface{}
	NotFoundException                   *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}

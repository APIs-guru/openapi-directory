package operations

type PutSuppressedDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutSuppressedDestinationRequestBodyReasonEnum string

const (
	PutSuppressedDestinationRequestBodyReasonEnumBounce    PutSuppressedDestinationRequestBodyReasonEnum = "BOUNCE"
	PutSuppressedDestinationRequestBodyReasonEnumComplaint PutSuppressedDestinationRequestBodyReasonEnum = "COMPLAINT"
)

type PutSuppressedDestinationRequestBody struct {
	EmailAddress string                                        `json:"EmailAddress"`
	Reason       PutSuppressedDestinationRequestBodyReasonEnum `json:"Reason"`
}

type PutSuppressedDestinationRequest struct {
	Headers PutSuppressedDestinationHeaders
	Request PutSuppressedDestinationRequestBody `request:"mediaType=application/json"`
}

type PutSuppressedDestinationResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	PutSuppressedDestinationResponse map[string]interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
}

package operations

type PutDedicatedIPInPoolPathParams struct {
	IP string `pathParam:"style=simple,explode=false,name=IP"`
}

type PutDedicatedIPInPoolHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutDedicatedIPInPoolRequestBody struct {
	DestinationPoolName string `json:"DestinationPoolName"`
}

type PutDedicatedIPInPoolRequest struct {
	PathParams PutDedicatedIPInPoolPathParams
	Headers    PutDedicatedIPInPoolHeaders
	Request    PutDedicatedIPInPoolRequestBody `request:"mediaType=application/json"`
}

type PutDedicatedIPInPoolResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	NotFoundException            *interface{}
	PutDedicatedIPInPoolResponse map[string]interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}

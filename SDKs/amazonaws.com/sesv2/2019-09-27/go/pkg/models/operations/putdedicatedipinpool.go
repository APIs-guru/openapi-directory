package operations

type PutDedicatedIPInPoolPathParams struct {
	IP string `pathParam:"style=simple,explode=false,name=IP"`
}

type PutDedicatedIPInPoolHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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

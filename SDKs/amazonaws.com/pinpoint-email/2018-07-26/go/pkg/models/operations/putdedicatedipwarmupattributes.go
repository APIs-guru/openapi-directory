package operations

type PutDedicatedIPWarmupAttributesPathParams struct {
	IP string `pathParam:"style=simple,explode=false,name=IP"`
}

type PutDedicatedIPWarmupAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutDedicatedIPWarmupAttributesRequestBody struct {
	WarmupPercentage int64 `json:"WarmupPercentage"`
}

type PutDedicatedIPWarmupAttributesRequest struct {
	PathParams PutDedicatedIPWarmupAttributesPathParams
	Headers    PutDedicatedIPWarmupAttributesHeaders
	Request    PutDedicatedIPWarmupAttributesRequestBody `request:"mediaType=application/json"`
}

type PutDedicatedIPWarmupAttributesResponse struct {
	BadRequestException                    *interface{}
	ContentType                            string
	NotFoundException                      *interface{}
	PutDedicatedIPWarmupAttributesResponse map[string]interface{}
	StatusCode                             int64
	TooManyRequestsException               *interface{}
}

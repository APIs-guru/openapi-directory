package operations

type PutAccountDedicatedIPWarmupAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutAccountDedicatedIPWarmupAttributesRequestBody struct {
	AutoWarmupEnabled *bool `json:"AutoWarmupEnabled"`
}

type PutAccountDedicatedIPWarmupAttributesRequest struct {
	Headers PutAccountDedicatedIPWarmupAttributesHeaders
	Request PutAccountDedicatedIPWarmupAttributesRequestBody `request:"mediaType=application/json"`
}

type PutAccountDedicatedIPWarmupAttributesResponse struct {
	BadRequestException                           *interface{}
	ContentType                                   string
	PutAccountDedicatedIPWarmupAttributesResponse map[string]interface{}
	StatusCode                                    int64
	TooManyRequestsException                      *interface{}
}

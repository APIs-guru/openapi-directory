package operations

type TagStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TagStreamRequestBody struct {
	StreamArn  *string           `json:"StreamARN"`
	StreamName *string           `json:"StreamName"`
	Tags       map[string]string `json:"Tags"`
}

type TagStreamRequest struct {
	Headers TagStreamHeaders
	Request TagStreamRequestBody `request:"mediaType=application/json"`
}

type TagStreamResponse struct {
	ClientLimitExceededException          *interface{}
	ContentType                           string
	InvalidArgumentException              *interface{}
	InvalidResourceFormatException        *interface{}
	NotAuthorizedException                *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	TagStreamOutput                       map[string]interface{}
	TagsPerResourceExceededLimitException *interface{}
}

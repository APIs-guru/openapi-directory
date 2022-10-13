package operations

type UntagStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UntagStreamRequestBody struct {
	StreamArn  *string  `json:"StreamARN"`
	StreamName *string  `json:"StreamName"`
	TagKeyList []string `json:"TagKeyList"`
}

type UntagStreamRequest struct {
	Headers UntagStreamHeaders
	Request UntagStreamRequestBody `request:"mediaType=application/json"`
}

type UntagStreamResponse struct {
	ClientLimitExceededException   *interface{}
	ContentType                    string
	InvalidArgumentException       *interface{}
	InvalidResourceFormatException *interface{}
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	UntagStreamOutput              map[string]interface{}
}

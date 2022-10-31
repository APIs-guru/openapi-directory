package operations

type UntagStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UntagStreamRequestBody struct {
	StreamArn  *string  `json:"StreamARN,omitempty"`
	StreamName *string  `json:"StreamName,omitempty"`
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

package operations

type TagStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type TagStreamRequestBody struct {
	StreamArn  *string           `json:"StreamARN,omitempty"`
	StreamName *string           `json:"StreamName,omitempty"`
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

package operations

type DeleteStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteStreamRequestBody struct {
	CurrentVersion *string `json:"CurrentVersion,omitempty"`
	StreamArn      string  `json:"StreamARN"`
}

type DeleteStreamRequest struct {
	Headers DeleteStreamHeaders
	Request DeleteStreamRequestBody `request:"mediaType=application/json"`
}

type DeleteStreamResponse struct {
	ClientLimitExceededException *interface{}
	ContentType                  string
	DeleteStreamOutput           map[string]interface{}
	InvalidArgumentException     *interface{}
	NotAuthorizedException       *interface{}
	ResourceInUseException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	VersionMismatchException     *interface{}
}

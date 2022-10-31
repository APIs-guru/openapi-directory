package operations

type UpdateStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateStreamRequestBody struct {
	CurrentVersion string  `json:"CurrentVersion"`
	DeviceName     *string `json:"DeviceName,omitempty"`
	MediaType      *string `json:"MediaType,omitempty"`
	StreamArn      *string `json:"StreamARN,omitempty"`
	StreamName     *string `json:"StreamName,omitempty"`
}

type UpdateStreamRequest struct {
	Headers UpdateStreamHeaders
	Request UpdateStreamRequestBody `request:"mediaType=application/json"`
}

type UpdateStreamResponse struct {
	ClientLimitExceededException *interface{}
	ContentType                  string
	InvalidArgumentException     *interface{}
	NotAuthorizedException       *interface{}
	ResourceInUseException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	UpdateStreamOutput           map[string]interface{}
	VersionMismatchException     *interface{}
}

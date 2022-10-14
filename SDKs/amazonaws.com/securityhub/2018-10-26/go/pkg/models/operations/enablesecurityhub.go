package operations

type EnableSecurityHubHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type EnableSecurityHubRequestBody struct {
	EnableDefaultStandards *bool             `json:"EnableDefaultStandards,omitempty"`
	Tags                   map[string]string `json:"Tags,omitempty"`
}

type EnableSecurityHubRequest struct {
	Headers EnableSecurityHubHeaders
	Request EnableSecurityHubRequestBody `request:"mediaType=application/json"`
}

type EnableSecurityHubResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	EnableSecurityHubResponse map[string]interface{}
	InternalException         *interface{}
	InvalidAccessException    *interface{}
	LimitExceededException    *interface{}
	ResourceConflictException *interface{}
	StatusCode                int64
}

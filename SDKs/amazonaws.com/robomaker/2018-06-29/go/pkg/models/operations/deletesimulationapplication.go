package operations

type DeleteSimulationApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteSimulationApplicationRequestBody struct {
	Application        string  `json:"application"`
	ApplicationVersion *string `json:"applicationVersion,omitempty"`
}

type DeleteSimulationApplicationRequest struct {
	Headers DeleteSimulationApplicationHeaders
	Request DeleteSimulationApplicationRequestBody `request:"mediaType=application/json"`
}

type DeleteSimulationApplicationResponse struct {
	ContentType                         string
	DeleteSimulationApplicationResponse map[string]interface{}
	InternalServerException             *interface{}
	InvalidParameterException           *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
}

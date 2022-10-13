package operations

type DeleteFleetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteFleetRequestBody struct {
	Fleet string `json:"fleet"`
}

type DeleteFleetRequest struct {
	Headers DeleteFleetHeaders
	Request DeleteFleetRequestBody `request:"mediaType=application/json"`
}

type DeleteFleetResponse struct {
	ContentType               string
	DeleteFleetResponse       map[string]interface{}
	InternalServerException   *interface{}
	InvalidParameterException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}

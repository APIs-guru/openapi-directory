package operations

type DeleteRobotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteRobotRequestBody struct {
	Robot string `json:"robot"`
}

type DeleteRobotRequest struct {
	Headers DeleteRobotHeaders
	Request DeleteRobotRequestBody `request:"mediaType=application/json"`
}

type DeleteRobotResponse struct {
	ContentType               string
	DeleteRobotResponse       map[string]interface{}
	InternalServerException   *interface{}
	InvalidParameterException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}

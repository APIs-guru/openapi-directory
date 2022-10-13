package operations

type CancelDeploymentJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelDeploymentJobRequestBody struct {
	Job string `json:"job"`
}

type CancelDeploymentJobRequest struct {
	Headers CancelDeploymentJobHeaders
	Request CancelDeploymentJobRequestBody `request:"mediaType=application/json"`
}

type CancelDeploymentJobResponse struct {
	CancelDeploymentJobResponse map[string]interface{}
	ContentType                 string
	InternalServerException     *interface{}
	InvalidParameterException   *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
